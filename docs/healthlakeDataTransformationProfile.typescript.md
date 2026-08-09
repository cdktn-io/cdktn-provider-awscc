# `healthlakeDataTransformationProfile` Submodule <a name="`healthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeDataTransformationProfile <a name="HealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile(scope: Construct, id: string, config: HealthlakeDataTransformationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription">resetProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource"></a>

```typescript
public putSource(value: HealthlakeDataTransformationProfileSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | HealthlakeDataTransformationProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetProfileDescription` <a name="resetProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription"></a>

```typescript
public resetProfileDescription(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthlakeDataTransformationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat">targetFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput">profileDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput">sourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription">profileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source"></a>

```typescript
public readonly source: HealthlakeDataTransformationProfileSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags"></a>

```typescript
public readonly tags: HealthlakeDataTransformationProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a>

---

##### `targetFormat`<sup>Required</sup> <a name="targetFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat"></a>

```typescript
public readonly targetFormat: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `profileDescriptionInput`<sup>Optional</sup> <a name="profileDescriptionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput"></a>

```typescript
public readonly profileDescriptionInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput"></a>

```typescript
public readonly sourceFormatInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | HealthlakeDataTransformationProfileSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | HealthlakeDataTransformationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `profileDescription`<sup>Required</sup> <a name="profileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription"></a>

```typescript
public readonly profileDescription: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeDataTransformationProfileConfig <a name="HealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileConfig: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName">profileName</a></code> | <code>string</code> | The human-readable name of the profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat">sourceFormat</a></code> | <code>string</code> | The source format that this profile converts from. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription">profileDescription</a></code> | <code>string</code> | A human-readable description of the profile's purpose. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | The source from which to create the profile's initial template content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | An array of key-value pairs to apply to this profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The human-readable name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_name HealthlakeDataTransformationProfile#profile_name}

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat"></a>

```typescript
public readonly sourceFormat: string;
```

- *Type:* string

The source format that this profile converts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source_format HealthlakeDataTransformationProfile#source_format}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest.

If omitted, an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#kms_key_id HealthlakeDataTransformationProfile#kms_key_id}

---

##### `profileDescription`<sup>Optional</sup> <a name="profileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription"></a>

```typescript
public readonly profileDescription: string;
```

- *Type:* string

A human-readable description of the profile's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_description HealthlakeDataTransformationProfile#profile_description}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source"></a>

```typescript
public readonly source: HealthlakeDataTransformationProfileSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

The source from which to create the profile's initial template content.

Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source HealthlakeDataTransformationProfile#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | HealthlakeDataTransformationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

An array of key-value pairs to apply to this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#tags HealthlakeDataTransformationProfile#tags}

---

### HealthlakeDataTransformationProfileSource <a name="HealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileSource: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId">existingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | Create the profile by cloning a specific version of an existing profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping">profileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | Create the profile from raw Velocity template mapping content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile">starterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | Create the profile from a predefined starter profile of transformation templates. |

---

##### `existingVersionedProfileId`<sup>Optional</sup> <a name="existingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId"></a>

```typescript
public readonly existingVersionedProfileId: HealthlakeDataTransformationProfileSourceExistingVersionedProfileId;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

Create the profile by cloning a specific version of an existing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#existing_versioned_profile_id HealthlakeDataTransformationProfile#existing_versioned_profile_id}

---

##### `profileMapping`<sup>Optional</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping"></a>

```typescript
public readonly profileMapping: HealthlakeDataTransformationProfileSourceProfileMapping;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

Create the profile from raw Velocity template mapping content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

##### `starterProfile`<sup>Optional</sup> <a name="starterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile"></a>

```typescript
public readonly starterProfile: HealthlakeDataTransformationProfileSourceStarterProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

Create the profile from a predefined starter profile of transformation templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile HealthlakeDataTransformationProfile#starter_profile}

---

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileSourceExistingVersionedProfileId: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId">profileId</a></code> | <code>string</code> | The unique identifier of the source profile to clone. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version">version</a></code> | <code>number</code> | The version number of the source profile to clone. |

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The unique identifier of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_id HealthlakeDataTransformationProfile#profile_id}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

The version number of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#version HealthlakeDataTransformationProfile#version}

---

### HealthlakeDataTransformationProfileSourceProfileMapping <a name="HealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileSourceProfileMapping: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping">profileMapping</a></code> | <code>{[ key: string ]: string}</code> | Map of template file paths to their Velocity template content. |

---

##### `profileMapping`<sup>Optional</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping"></a>

```typescript
public readonly profileMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of template file paths to their Velocity template content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

### HealthlakeDataTransformationProfileSourceStarterProfile <a name="HealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileSourceStarterProfile: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName">starterProfileName</a></code> | <code>string</code> | The name of the starter profile to seed the profile from. |

---

##### `starterProfileName`<sup>Optional</sup> <a name="starterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName"></a>

```typescript
public readonly starterProfileName: string;
```

- *Type:* string

The name of the starter profile to seed the profile from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile_name HealthlakeDataTransformationProfile#starter_profile_name}

---

### HealthlakeDataTransformationProfileTags <a name="HealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

const healthlakeDataTransformationProfileTags: healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#key HealthlakeDataTransformationProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#value HealthlakeDataTransformationProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileSourceExistingVersionedProfileId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### HealthlakeDataTransformationProfileSourceOutputReference <a name="HealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId">putExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping">putProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile">putStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId">resetExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping">resetProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile">resetStarterProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExistingVersionedProfileId` <a name="putExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId"></a>

```typescript
public putExistingVersionedProfileId(value: HealthlakeDataTransformationProfileSourceExistingVersionedProfileId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `putProfileMapping` <a name="putProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping"></a>

```typescript
public putProfileMapping(value: HealthlakeDataTransformationProfileSourceProfileMapping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `putStarterProfile` <a name="putStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile"></a>

```typescript
public putStarterProfile(value: HealthlakeDataTransformationProfileSourceStarterProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `resetExistingVersionedProfileId` <a name="resetExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId"></a>

```typescript
public resetExistingVersionedProfileId(): void
```

##### `resetProfileMapping` <a name="resetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping"></a>

```typescript
public resetProfileMapping(): void
```

##### `resetStarterProfile` <a name="resetStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile"></a>

```typescript
public resetStarterProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">existingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">profileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">starterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput">existingVersionedProfileIdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput">profileMappingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput">starterProfileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `existingVersionedProfileId`<sup>Required</sup> <a name="existingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```typescript
public readonly existingVersionedProfileId: HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```typescript
public readonly profileMapping: HealthlakeDataTransformationProfileSourceProfileMappingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `starterProfile`<sup>Required</sup> <a name="starterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```typescript
public readonly starterProfile: HealthlakeDataTransformationProfileSourceStarterProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `existingVersionedProfileIdInput`<sup>Optional</sup> <a name="existingVersionedProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput"></a>

```typescript
public readonly existingVersionedProfileIdInput: IResolvable | HealthlakeDataTransformationProfileSourceExistingVersionedProfileId;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `profileMappingInput`<sup>Optional</sup> <a name="profileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput"></a>

```typescript
public readonly profileMappingInput: IResolvable | HealthlakeDataTransformationProfileSourceProfileMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `starterProfileInput`<sup>Optional</sup> <a name="starterProfileInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput"></a>

```typescript
public readonly starterProfileInput: IResolvable | HealthlakeDataTransformationProfileSourceStarterProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---


### HealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="HealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping">resetProfileMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfileMapping` <a name="resetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping"></a>

```typescript
public resetProfileMapping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput">profileMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">profileMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `profileMappingInput`<sup>Optional</sup> <a name="profileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput"></a>

```typescript
public readonly profileMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```typescript
public readonly profileMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileSourceProfileMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### HealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="HealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName">resetStarterProfileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStarterProfileName` <a name="resetStarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName"></a>

```typescript
public resetStarterProfileName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput">starterProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">starterProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `starterProfileNameInput`<sup>Optional</sup> <a name="starterProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput"></a>

```typescript
public readonly starterProfileNameInput: string;
```

- *Type:* string

---

##### `starterProfileName`<sup>Required</sup> <a name="starterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```typescript
public readonly starterProfileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileSourceStarterProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### HealthlakeDataTransformationProfileTagsList <a name="HealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get"></a>

```typescript
public get(index: number): HealthlakeDataTransformationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>[]

---


### HealthlakeDataTransformationProfileTagsOutputReference <a name="HealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```typescript
import { healthlakeDataTransformationProfile } from '@cdktn/provider-awscc'

new healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeDataTransformationProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>

---



