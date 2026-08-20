# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktn/provider-awscc.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature awscc_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeature(scope: Construct, id: string, config: EvidentlyFeatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides">putEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations">putVariations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">resetDefaultVariation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">resetEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">resetEvaluationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityOverrides` <a name="putEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides"></a>

```typescript
public putEntityOverrides(value: IResolvable | EvidentlyFeatureEntityOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags"></a>

```typescript
public putTags(value: IResolvable | EvidentlyFeatureTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---

##### `putVariations` <a name="putVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```typescript
public putVariations(value: IResolvable | EvidentlyFeatureVariations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---

##### `resetDefaultVariation` <a name="resetDefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```typescript
public resetDefaultVariation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntityOverrides` <a name="resetEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```typescript
public resetEntityOverrides(): void
```

##### `resetEvaluationStrategy` <a name="resetEvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```typescript
public resetEvaluationStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

evidentlyFeature.EvidentlyFeature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

evidentlyFeature.EvidentlyFeature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

evidentlyFeature.EvidentlyFeature.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

evidentlyFeature.EvidentlyFeature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvidentlyFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvidentlyFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides">entityOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations">variations</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">defaultVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">entityOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">evaluationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput">variationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">evaluationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `entityOverrides`<sup>Required</sup> <a name="entityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```typescript
public readonly entityOverrides: EvidentlyFeatureEntityOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```typescript
public readonly tags: EvidentlyFeatureTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a>

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```typescript
public readonly variations: EvidentlyFeatureVariationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `defaultVariationInput`<sup>Optional</sup> <a name="defaultVariationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```typescript
public readonly defaultVariationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entityOverridesInput`<sup>Optional</sup> <a name="entityOverridesInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```typescript
public readonly entityOverridesInput: IResolvable | EvidentlyFeatureEntityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---

##### `evaluationStrategyInput`<sup>Optional</sup> <a name="evaluationStrategyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```typescript
public readonly evaluationStrategyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EvidentlyFeatureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```typescript
public readonly variationsInput: IResolvable | EvidentlyFeatureVariations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---

##### `defaultVariation`<sup>Required</sup> <a name="defaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `evaluationStrategy`<sup>Required</sup> <a name="evaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```typescript
public readonly evaluationStrategy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

const evidentlyFeatureConfig: evidentlyFeature.EvidentlyFeatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations">variations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">entityOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">evaluationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#name EvidentlyFeature#name}.

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#project EvidentlyFeature#project}.

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```typescript
public readonly variations: IResolvable | EvidentlyFeatureVariations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}.

---

##### `defaultVariation`<sup>Optional</sup> <a name="defaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#description EvidentlyFeature#description}.

---

##### `entityOverrides`<sup>Optional</sup> <a name="entityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```typescript
public readonly entityOverrides: IResolvable | EvidentlyFeatureEntityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `evaluationStrategy`<sup>Optional</sup> <a name="evaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```typescript
public readonly evaluationStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EvidentlyFeatureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#tags EvidentlyFeature#tags}

---

### EvidentlyFeatureEntityOverrides <a name="EvidentlyFeatureEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

const evidentlyFeatureEntityOverrides: evidentlyFeature.EvidentlyFeatureEntityOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation">variation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}. |

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}.

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}.

---

### EvidentlyFeatureTags <a name="EvidentlyFeatureTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

const evidentlyFeatureTags: evidentlyFeature.EvidentlyFeatureTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#key EvidentlyFeature#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

const evidentlyFeatureVariations: evidentlyFeature.EvidentlyFeatureVariations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue">doubleValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue">longValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName">variationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `longValue`<sup>Optional</sup> <a name="longValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}.

---

##### `variationName`<sup>Optional</sup> <a name="variationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName"></a>

```typescript
public readonly variationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEntityOverridesList <a name="EvidentlyFeatureEntityOverridesList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureEntityOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get"></a>

```typescript
public get(index: number): EvidentlyFeatureEntityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureEntityOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>[]

---


### EvidentlyFeatureEntityOverridesOutputReference <a name="EvidentlyFeatureEntityOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation">resetVariation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityId` <a name="resetEntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId"></a>

```typescript
public resetEntityId(): void
```

##### `resetVariation` <a name="resetVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation"></a>

```typescript
public resetVariation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput">variationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation">variation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureEntityOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides">EvidentlyFeatureEntityOverrides</a>

---


### EvidentlyFeatureTagsList <a name="EvidentlyFeatureTagsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get"></a>

```typescript
public get(index: number): EvidentlyFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>[]

---


### EvidentlyFeatureTagsOutputReference <a name="EvidentlyFeatureTagsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags">EvidentlyFeatureTags</a>

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureVariationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```typescript
public get(index: number): EvidentlyFeatureVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureVariations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>[]

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```typescript
import { evidentlyFeature } from '@cdktn/provider-awscc'

new evidentlyFeature.EvidentlyFeatureVariationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue">resetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName">resetVariationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetLongValue` <a name="resetLongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue"></a>

```typescript
public resetLongValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```

##### `resetVariationName` <a name="resetVariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName"></a>

```typescript
public resetVariationName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput">longValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput">variationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue">longValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName">variationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `longValueInput`<sup>Optional</sup> <a name="longValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput"></a>

```typescript
public readonly longValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `variationNameInput`<sup>Optional</sup> <a name="variationNameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput"></a>

```typescript
public readonly variationNameInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `variationName`<sup>Required</sup> <a name="variationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName"></a>

```typescript
public readonly variationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvidentlyFeatureVariations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations">EvidentlyFeatureVariations</a>

---



