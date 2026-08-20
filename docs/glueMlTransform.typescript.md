# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktn/provider-awscc.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransform(scope: Construct, id: string, config: GlueMlTransformConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables">putInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption">putTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters">putTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption">resetTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputRecordTables` <a name="putInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```typescript
public putInputRecordTables(value: GlueMlTransformInputRecordTables): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `putTransformEncryption` <a name="putTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption"></a>

```typescript
public putTransformEncryption(value: GlueMlTransformTransformEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `putTransformParameters` <a name="putTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters"></a>

```typescript
public putTransformParameters(value: GlueMlTransformTransformParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```typescript
public resetGlueVersion(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTransformEncryption` <a name="resetTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption"></a>

```typescript
public resetTransformEncryption(): void
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```typescript
public resetWorkerType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

glueMlTransform.GlueMlTransform.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

glueMlTransform.GlueMlTransform.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

glueMlTransform.GlueMlTransform.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

glueMlTransform.GlueMlTransform.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueMlTransform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId">transformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput">glueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">inputRecordTablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput">transformEncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput">transformParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput">workerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```typescript
public readonly inputRecordTables: GlueMlTransformInputRecordTablesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a>

---

##### `transformEncryption`<sup>Required</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption"></a>

```typescript
public readonly transformEncryption: GlueMlTransformTransformEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a>

---

##### `transformId`<sup>Required</sup> <a name="transformId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId"></a>

```typescript
public readonly transformId: string;
```

- *Type:* string

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters"></a>

```typescript
public readonly transformParameters: GlueMlTransformTransformParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```typescript
public readonly glueVersionInput: string;
```

- *Type:* string

---

##### `inputRecordTablesInput`<sup>Optional</sup> <a name="inputRecordTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```typescript
public readonly inputRecordTablesInput: IResolvable | GlueMlTransformInputRecordTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `transformEncryptionInput`<sup>Optional</sup> <a name="transformEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput"></a>

```typescript
public readonly transformEncryptionInput: IResolvable | GlueMlTransformTransformEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `transformParametersInput`<sup>Optional</sup> <a name="transformParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput"></a>

```typescript
public readonly transformParametersInput: IResolvable | GlueMlTransformTransformParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```typescript
public readonly workerTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformConfig: glueMlTransform.GlueMlTransformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role">role</a></code> | <code>string</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description">description</a></code> | <code>string</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion">glueVersion</a></code> | <code>string</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name">name</a></code> | <code>string</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout">timeout</a></code> | <code>number</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType">workerType</a></code> | <code>string</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```typescript
public readonly inputRecordTables: GlueMlTransformInputRecordTables;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters"></a>

```typescript
public readonly transformParameters: GlueMlTransformTransformParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `transformEncryption`<sup>Optional</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption"></a>

```typescript
public readonly transformEncryption: GlueMlTransformTransformEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformInputRecordTables: glueMlTransform.GlueMlTransformInputRecordTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables">glueTables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | The database and table in the AWS Glue Data Catalog that is used for input or output data. |

---

##### `glueTables`<sup>Optional</sup> <a name="glueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables"></a>

```typescript
public readonly glueTables: IResolvable | GlueMlTransformInputRecordTablesGlueTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

### GlueMlTransformInputRecordTablesGlueTables <a name="GlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformInputRecordTablesGlueTables: glueMlTransform.GlueMlTransformInputRecordTablesGlueTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId">catalogId</a></code> | <code>string</code> | A unique identifier for the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the connection to the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName">databaseName</a></code> | <code>string</code> | A database name in the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName">tableName</a></code> | <code>string</code> | A table name in the AWS Glue Data Catalog. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

A unique identifier for the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the connection to the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

A database name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

A table name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}

---

### GlueMlTransformTransformEncryption <a name="GlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformTransformEncryption: glueMlTransform.GlueMlTransformTransformEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption">mlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | The encryption-at-rest settings of the transform that apply to accessing user data. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName">taskRunSecurityConfigurationName</a></code> | <code>string</code> | The name of the security configuration. |

---

##### `mlUserDataEncryption`<sup>Optional</sup> <a name="mlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

```typescript
public readonly mlUserDataEncryption: GlueMlTransformTransformEncryptionMlUserDataEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

##### `taskRunSecurityConfigurationName`<sup>Optional</sup> <a name="taskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

```typescript
public readonly taskRunSecurityConfigurationName: string;
```

- *Type:* string

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

### GlueMlTransformTransformEncryptionMlUserDataEncryption <a name="GlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformTransformEncryptionMlUserDataEncryption: glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID for the customer-provided KMS key. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode">mlUserDataEncryptionMode</a></code> | <code>string</code> | The encryption mode applied to user data. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

##### `mlUserDataEncryptionMode`<sup>Optional</sup> <a name="mlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

```typescript
public readonly mlUserDataEncryptionMode: string;
```

- *Type:* string

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

### GlueMlTransformTransformParameters <a name="GlueMlTransformTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformTransformParameters: glueMlTransform.GlueMlTransformTransformParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType">transformType</a></code> | <code>string</code> | The type of machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | The parameters to configure the find matches transform. |

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType"></a>

```typescript
public readonly transformType: string;
```

- *Type:* string

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

##### `findMatchesParameters`<sup>Optional</sup> <a name="findMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters"></a>

```typescript
public readonly findMatchesParameters: GlueMlTransformTransformParametersFindMatchesParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

### GlueMlTransformTransformParametersFindMatchesParameters <a name="GlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

const glueMlTransformTransformParametersFindMatchesParameters: glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff">accuracyCostTradeoff</a></code> | <code>number</code> | The value for accuracy and cost tradeoff. A value of 0.5 means balance. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, forces the output to match the provided labels. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff">precisionRecallTradeoff</a></code> | <code>number</code> | The value for precision and recall tradeoff. A value of 0.5 means no preference. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>string</code> | The name of a column that uniquely identifies rows in the source table. |

---

##### `accuracyCostTradeoff`<sup>Optional</sup> <a name="accuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

```typescript
public readonly accuracyCostTradeoff: number;
```

- *Type:* number

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

##### `enforceProvidedLabels`<sup>Optional</sup> <a name="enforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```typescript
public readonly enforceProvidedLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

##### `precisionRecallTradeoff`<sup>Optional</sup> <a name="precisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

```typescript
public readonly precisionRecallTradeoff: number;
```

- *Type:* number

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

##### `primaryKeyColumnName`<sup>Optional</sup> <a name="primaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```typescript
public readonly primaryKeyColumnName: string;
```

- *Type:* string

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesGlueTablesList <a name="GlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```typescript
public get(index: number): GlueMlTransformInputRecordTablesGlueTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformInputRecordTablesGlueTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---


### GlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="GlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformInputRecordTablesGlueTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformInputRecordTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables">putGlueTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables">resetGlueTables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueTables` <a name="putGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables"></a>

```typescript
public putGlueTables(value: IResolvable | GlueMlTransformInputRecordTablesGlueTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---

##### `resetGlueTables` <a name="resetGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables"></a>

```typescript
public resetGlueTables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables">glueTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput">glueTablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueTables`<sup>Required</sup> <a name="glueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```typescript
public readonly glueTables: GlueMlTransformInputRecordTablesGlueTablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `glueTablesInput`<sup>Optional</sup> <a name="glueTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput"></a>

```typescript
public readonly glueTablesInput: IResolvable | GlueMlTransformInputRecordTablesGlueTables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables">GlueMlTransformInputRecordTablesGlueTables</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformInputRecordTables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---


### GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode">resetMlUserDataEncryptionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMlUserDataEncryptionMode` <a name="resetMlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode"></a>

```typescript
public resetMlUserDataEncryptionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput">mlUserDataEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">mlUserDataEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `mlUserDataEncryptionModeInput`<sup>Optional</sup> <a name="mlUserDataEncryptionModeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput"></a>

```typescript
public readonly mlUserDataEncryptionModeInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `mlUserDataEncryptionMode`<sup>Required</sup> <a name="mlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```typescript
public readonly mlUserDataEncryptionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformTransformEncryptionMlUserDataEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### GlueMlTransformTransformEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformTransformEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption">putMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption">resetMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName">resetTaskRunSecurityConfigurationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlUserDataEncryption` <a name="putMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption"></a>

```typescript
public putMlUserDataEncryption(value: GlueMlTransformTransformEncryptionMlUserDataEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `resetMlUserDataEncryption` <a name="resetMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption"></a>

```typescript
public resetMlUserDataEncryption(): void
```

##### `resetTaskRunSecurityConfigurationName` <a name="resetTaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName"></a>

```typescript
public resetTaskRunSecurityConfigurationName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">mlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput">mlUserDataEncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput">taskRunSecurityConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">taskRunSecurityConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mlUserDataEncryption`<sup>Required</sup> <a name="mlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```typescript
public readonly mlUserDataEncryption: GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `mlUserDataEncryptionInput`<sup>Optional</sup> <a name="mlUserDataEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput"></a>

```typescript
public readonly mlUserDataEncryptionInput: IResolvable | GlueMlTransformTransformEncryptionMlUserDataEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `taskRunSecurityConfigurationNameInput`<sup>Optional</sup> <a name="taskRunSecurityConfigurationNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput"></a>

```typescript
public readonly taskRunSecurityConfigurationNameInput: string;
```

- *Type:* string

---

##### `taskRunSecurityConfigurationName`<sup>Required</sup> <a name="taskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```typescript
public readonly taskRunSecurityConfigurationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformTransformEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---


### GlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff">resetAccuracyCostTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">resetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff">resetPrecisionRecallTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">resetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccuracyCostTradeoff` <a name="resetAccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff"></a>

```typescript
public resetAccuracyCostTradeoff(): void
```

##### `resetEnforceProvidedLabels` <a name="resetEnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```typescript
public resetEnforceProvidedLabels(): void
```

##### `resetPrecisionRecallTradeoff` <a name="resetPrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff"></a>

```typescript
public resetPrecisionRecallTradeoff(): void
```

##### `resetPrimaryKeyColumnName` <a name="resetPrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```typescript
public resetPrimaryKeyColumnName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput">accuracyCostTradeoffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">enforceProvidedLabelsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput">precisionRecallTradeoffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">primaryKeyColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">accuracyCostTradeoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">precisionRecallTradeoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracyCostTradeoffInput`<sup>Optional</sup> <a name="accuracyCostTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput"></a>

```typescript
public readonly accuracyCostTradeoffInput: number;
```

- *Type:* number

---

##### `enforceProvidedLabelsInput`<sup>Optional</sup> <a name="enforceProvidedLabelsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```typescript
public readonly enforceProvidedLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `precisionRecallTradeoffInput`<sup>Optional</sup> <a name="precisionRecallTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput"></a>

```typescript
public readonly precisionRecallTradeoffInput: number;
```

- *Type:* number

---

##### `primaryKeyColumnNameInput`<sup>Optional</sup> <a name="primaryKeyColumnNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```typescript
public readonly primaryKeyColumnNameInput: string;
```

- *Type:* string

---

##### `accuracyCostTradeoff`<sup>Required</sup> <a name="accuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```typescript
public readonly accuracyCostTradeoff: number;
```

- *Type:* number

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="enforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```typescript
public readonly enforceProvidedLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `precisionRecallTradeoff`<sup>Required</sup> <a name="precisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```typescript
public readonly precisionRecallTradeoff: number;
```

- *Type:* number

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="primaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```typescript
public readonly primaryKeyColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformTransformParametersFindMatchesParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---


### GlueMlTransformTransformParametersOutputReference <a name="GlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer"></a>

```typescript
import { glueMlTransform } from '@cdktn/provider-awscc'

new glueMlTransform.GlueMlTransformTransformParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters">putFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters">resetFindMatchesParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFindMatchesParameters` <a name="putFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters"></a>

```typescript
public putFindMatchesParameters(value: GlueMlTransformTransformParametersFindMatchesParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `resetFindMatchesParameters` <a name="resetFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters"></a>

```typescript
public resetFindMatchesParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput">findMatchesParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput">transformTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType">transformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```typescript
public readonly findMatchesParameters: GlueMlTransformTransformParametersFindMatchesParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `findMatchesParametersInput`<sup>Optional</sup> <a name="findMatchesParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```typescript
public readonly findMatchesParametersInput: IResolvable | GlueMlTransformTransformParametersFindMatchesParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `transformTypeInput`<sup>Optional</sup> <a name="transformTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput"></a>

```typescript
public readonly transformTypeInput: string;
```

- *Type:* string

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```typescript
public readonly transformType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueMlTransformTransformParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---



