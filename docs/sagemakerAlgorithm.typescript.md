# `sagemakerAlgorithm` Submodule <a name="`sagemakerAlgorithm` Submodule" id="@cdktn/provider-awscc.sagemakerAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAlgorithm <a name="SagemakerAlgorithm" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm awscc_sagemaker_algorithm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithm(scope: Construct, id: string, config: SagemakerAlgorithmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig">SagemakerAlgorithmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig">SagemakerAlgorithmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification">putInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification">putTrainingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription">resetAlgorithmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace">resetCertifyForMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification">resetInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInferenceSpecification` <a name="putInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification"></a>

```typescript
public putInferenceSpecification(value: SagemakerAlgorithmInferenceSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putInferenceSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerAlgorithmTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]

---

##### `putTrainingSpecification` <a name="putTrainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification"></a>

```typescript
public putTrainingSpecification(value: SagemakerAlgorithmTrainingSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.putTrainingSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---

##### `resetAlgorithmDescription` <a name="resetAlgorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetAlgorithmDescription"></a>

```typescript
public resetAlgorithmDescription(): void
```

##### `resetCertifyForMarketplace` <a name="resetCertifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetCertifyForMarketplace"></a>

```typescript
public resetCertifyForMarketplace(): void
```

##### `resetInferenceSpecification` <a name="resetInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetInferenceSpecification"></a>

```typescript
public resetInferenceSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

sagemakerAlgorithm.SagemakerAlgorithm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerAlgorithm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerAlgorithm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn">algorithmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput">algorithmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput">algorithmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput">certifyForMarketplaceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput">inferenceSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput">trainingSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription">algorithmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName">algorithmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `algorithmArn`<sup>Required</sup> <a name="algorithmArn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmArn"></a>

```typescript
public readonly algorithmArn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inferenceSpecification`<sup>Required</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecification"></a>

```typescript
public readonly inferenceSpecification: SagemakerAlgorithmInferenceSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference">SagemakerAlgorithmInferenceSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tags"></a>

```typescript
public readonly tags: SagemakerAlgorithmTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList">SagemakerAlgorithmTagsList</a>

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecification"></a>

```typescript
public readonly trainingSpecification: SagemakerAlgorithmTrainingSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationOutputReference</a>

---

##### `algorithmDescriptionInput`<sup>Optional</sup> <a name="algorithmDescriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescriptionInput"></a>

```typescript
public readonly algorithmDescriptionInput: string;
```

- *Type:* string

---

##### `algorithmNameInput`<sup>Optional</sup> <a name="algorithmNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmNameInput"></a>

```typescript
public readonly algorithmNameInput: string;
```

- *Type:* string

---

##### `certifyForMarketplaceInput`<sup>Optional</sup> <a name="certifyForMarketplaceInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplaceInput"></a>

```typescript
public readonly certifyForMarketplaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inferenceSpecificationInput`<sup>Optional</sup> <a name="inferenceSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.inferenceSpecificationInput"></a>

```typescript
public readonly inferenceSpecificationInput: IResolvable | SagemakerAlgorithmInferenceSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerAlgorithmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]

---

##### `trainingSpecificationInput`<sup>Optional</sup> <a name="trainingSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.trainingSpecificationInput"></a>

```typescript
public readonly trainingSpecificationInput: IResolvable | SagemakerAlgorithmTrainingSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---

##### `algorithmDescription`<sup>Required</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmDescription"></a>

```typescript
public readonly algorithmDescription: string;
```

- *Type:* string

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.algorithmName"></a>

```typescript
public readonly algorithmName: string;
```

- *Type:* string

---

##### `certifyForMarketplace`<sup>Required</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.certifyForMarketplace"></a>

```typescript
public readonly certifyForMarketplace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAlgorithmConfig <a name="SagemakerAlgorithmConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmConfig: sagemakerAlgorithm.SagemakerAlgorithmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName">algorithmName</a></code> | <code>string</code> | The name of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification">trainingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription">algorithmDescription</a></code> | <code>string</code> | A description of the algorithm. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace">certifyForMarketplace</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to certify the algorithm so that it can be listed in AWS Marketplace. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification">inferenceSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `algorithmName`<sup>Required</sup> <a name="algorithmName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmName"></a>

```typescript
public readonly algorithmName: string;
```

- *Type:* string

The name of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#algorithm_name SagemakerAlgorithm#algorithm_name}

---

##### `trainingSpecification`<sup>Required</sup> <a name="trainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.trainingSpecification"></a>

```typescript
public readonly trainingSpecification: SagemakerAlgorithmTrainingSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_specification SagemakerAlgorithm#training_specification}.

---

##### `algorithmDescription`<sup>Optional</sup> <a name="algorithmDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.algorithmDescription"></a>

```typescript
public readonly algorithmDescription: string;
```

- *Type:* string

A description of the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#algorithm_description SagemakerAlgorithm#algorithm_description}

---

##### `certifyForMarketplace`<sup>Optional</sup> <a name="certifyForMarketplace" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.certifyForMarketplace"></a>

```typescript
public readonly certifyForMarketplace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to certify the algorithm so that it can be listed in AWS Marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#certify_for_marketplace SagemakerAlgorithm#certify_for_marketplace}

---

##### `inferenceSpecification`<sup>Optional</sup> <a name="inferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.inferenceSpecification"></a>

```typescript
public readonly inferenceSpecification: SagemakerAlgorithmInferenceSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#inference_specification SagemakerAlgorithm#inference_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerAlgorithmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#tags SagemakerAlgorithm#tags}

---

### SagemakerAlgorithmInferenceSpecification <a name="SagemakerAlgorithmInferenceSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmInferenceSpecification: sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers">containers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.containers"></a>

```typescript
public readonly containers: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#containers SagemakerAlgorithm#containers}.

---

##### `supportedContentTypes`<sup>Optional</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Optional</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedRealtimeInferenceInstanceTypes"></a>

```typescript
public readonly supportedRealtimeInferenceInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_realtime_inference_instance_types SagemakerAlgorithm#supported_realtime_inference_instance_types}.

---

##### `supportedResponseMimeTypes`<sup>Optional</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedResponseMimeTypes"></a>

```typescript
public readonly supportedResponseMimeTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_response_mime_types SagemakerAlgorithm#supported_response_mime_types}.

---

##### `supportedTransformInstanceTypes`<sup>Optional</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification.property.supportedTransformInstanceTypes"></a>

```typescript
public readonly supportedTransformInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_transform_instance_types SagemakerAlgorithm#supported_transform_instance_types}.

---

### SagemakerAlgorithmInferenceSpecificationContainers <a name="SagemakerAlgorithmInferenceSpecificationContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmInferenceSpecificationContainers: sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname">containerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework">framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion">frameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint">isCheckpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName">nearestModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}. |

---

##### `containerHostname`<sup>Optional</sup> <a name="containerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#container_hostname SagemakerAlgorithm#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#environment SagemakerAlgorithm#environment}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#framework SagemakerAlgorithm#framework}.

---

##### `frameworkVersion`<sup>Optional</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.frameworkVersion"></a>

```typescript
public readonly frameworkVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#framework_version SagemakerAlgorithm#framework_version}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#image SagemakerAlgorithm#image}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#image_digest SagemakerAlgorithm#image_digest}.

---

##### `isCheckpoint`<sup>Optional</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.isCheckpoint"></a>

```typescript
public readonly isCheckpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_checkpoint SagemakerAlgorithm#is_checkpoint}.

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.modelInput"></a>

```typescript
public readonly modelInput: SagemakerAlgorithmInferenceSpecificationContainersModelInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#model_input SagemakerAlgorithm#model_input}.

---

##### `nearestModelName`<sup>Optional</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers.property.nearestModelName"></a>

```typescript
public readonly nearestModelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#nearest_model_name SagemakerAlgorithm#nearest_model_name}.

---

### SagemakerAlgorithmInferenceSpecificationContainersModelInput <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmInferenceSpecificationContainersModelInput: sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig">dataInputConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}. |

---

##### `dataInputConfig`<sup>Optional</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput.property.dataInputConfig"></a>

```typescript
public readonly dataInputConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#data_input_config SagemakerAlgorithm#data_input_config}.

---

### SagemakerAlgorithmTags <a name="SagemakerAlgorithmTags" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTags: sagemakerAlgorithm.SagemakerAlgorithmTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#key SagemakerAlgorithm#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#value SagemakerAlgorithm#value}.

---

### SagemakerAlgorithmTrainingSpecification <a name="SagemakerAlgorithmTrainingSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecification: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels">trainingChannels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage">trainingImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions">metricDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest">trainingImageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}. |

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTrainingInstanceTypes"></a>

```typescript
public readonly supportedTrainingInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_training_instance_types SagemakerAlgorithm#supported_training_instance_types}.

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingChannels"></a>

```typescript
public readonly trainingChannels: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_channels SagemakerAlgorithm#training_channels}.

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImage"></a>

```typescript
public readonly trainingImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_image SagemakerAlgorithm#training_image}.

---

##### `metricDefinitions`<sup>Optional</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#metric_definitions SagemakerAlgorithm#metric_definitions}.

---

##### `supportedHyperParameters`<sup>Optional</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedHyperParameters"></a>

```typescript
public readonly supportedHyperParameters: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_hyper_parameters SagemakerAlgorithm#supported_hyper_parameters}.

---

##### `supportedTuningJobObjectiveMetrics`<sup>Optional</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportedTuningJobObjectiveMetrics"></a>

```typescript
public readonly supportedTuningJobObjectiveMetrics: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_tuning_job_objective_metrics SagemakerAlgorithm#supported_tuning_job_objective_metrics}.

---

##### `supportsDistributedTraining`<sup>Optional</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.supportsDistributedTraining"></a>

```typescript
public readonly supportsDistributedTraining: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supports_distributed_training SagemakerAlgorithm#supports_distributed_training}.

---

##### `trainingImageDigest`<sup>Optional</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification.property.trainingImageDigest"></a>

```typescript
public readonly trainingImageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#training_image_digest SagemakerAlgorithm#training_image_digest}.

---

### SagemakerAlgorithmTrainingSpecificationMetricDefinitions <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationMetricDefinitions: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#regex SagemakerAlgorithm#regex}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedHyperParameters: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired">isRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable">isTunable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#default_value SagemakerAlgorithm#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `isTunable`<sup>Optional</sup> <a name="isTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.isTunable"></a>

```typescript
public readonly isTunable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_tunable SagemakerAlgorithm#is_tunable}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.range"></a>

```typescript
public readonly range: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#range SagemakerAlgorithm#range}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}. |

---

##### `categoricalParameterRangeSpecification`<sup>Optional</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.categoricalParameterRangeSpecification"></a>

```typescript
public readonly categoricalParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#categorical_parameter_range_specification SagemakerAlgorithm#categorical_parameter_range_specification}.

---

##### `continuousParameterRangeSpecification`<sup>Optional</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.continuousParameterRangeSpecification"></a>

```typescript
public readonly continuousParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#continuous_parameter_range_specification SagemakerAlgorithm#continuous_parameter_range_specification}.

---

##### `integerParameterRangeSpecification`<sup>Optional</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange.property.integerParameterRangeSpecification"></a>

```typescript
public readonly integerParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#integer_parameter_range_specification SagemakerAlgorithm#integer_parameter_range_specification}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#values SagemakerAlgorithm#values}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue">maxValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue">minValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue">maxValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue">minValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#max_value SagemakerAlgorithm#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#min_value SagemakerAlgorithm#min_value}.

---

### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}. |

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#metric_name SagemakerAlgorithm#metric_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#type SagemakerAlgorithm#type}.

---

### SagemakerAlgorithmTrainingSpecificationTrainingChannels <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

const sagemakerAlgorithmTrainingSpecificationTrainingChannels: sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes">supportedInputModes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired">isRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#name SagemakerAlgorithm#name}.

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_content_types SagemakerAlgorithm#supported_content_types}.

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedInputModes"></a>

```typescript
public readonly supportedInputModes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_input_modes SagemakerAlgorithm#supported_input_modes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#description SagemakerAlgorithm#description}.

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#is_required SagemakerAlgorithm#is_required}.

---

##### `supportedCompressionTypes`<sup>Optional</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels.property.supportedCompressionTypes"></a>

```typescript
public readonly supportedCompressionTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_algorithm#supported_compression_types SagemakerAlgorithm#supported_compression_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAlgorithmInferenceSpecificationContainersList <a name="SagemakerAlgorithmInferenceSpecificationContainersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmInferenceSpecificationContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]

---


### SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig">resetDataInputConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataInputConfig` <a name="resetDataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.resetDataInputConfig"></a>

```typescript
public resetDataInputConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput">dataInputConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig">dataInputConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInputConfigInput`<sup>Optional</sup> <a name="dataInputConfigInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfigInput"></a>

```typescript
public readonly dataInputConfigInput: string;
```

- *Type:* string

---

##### `dataInputConfig`<sup>Required</sup> <a name="dataInputConfig" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.dataInputConfig"></a>

```typescript
public readonly dataInputConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmInferenceSpecificationContainersModelInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---


### SagemakerAlgorithmInferenceSpecificationContainersOutputReference <a name="SagemakerAlgorithmInferenceSpecificationContainersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput">putModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname">resetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion">resetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint">resetIsCheckpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput">resetModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName">resetNearestModelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelInput` <a name="putModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput"></a>

```typescript
public putModelInput(value: SagemakerAlgorithmInferenceSpecificationContainersModelInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.putModelInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---

##### `resetContainerHostname` <a name="resetContainerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetContainerHostname"></a>

```typescript
public resetContainerHostname(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetFramework` <a name="resetFramework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFramework"></a>

```typescript
public resetFramework(): void
```

##### `resetFrameworkVersion` <a name="resetFrameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetFrameworkVersion"></a>

```typescript
public resetFrameworkVersion(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetIsCheckpoint` <a name="resetIsCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetIsCheckpoint"></a>

```typescript
public resetIsCheckpoint(): void
```

##### `resetModelInput` <a name="resetModelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetModelInput"></a>

```typescript
public resetModelInput(): void
```

##### `resetNearestModelName` <a name="resetNearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.resetNearestModelName"></a>

```typescript
public resetNearestModelName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput">modelInput</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput">containerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput">frameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput">isCheckpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput">modelInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput">nearestModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname">containerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion">frameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint">isCheckpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName">nearestModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Required</sup> <a name="modelInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference">SagemakerAlgorithmInferenceSpecificationContainersModelInputOutputReference</a>

---

##### `containerHostnameInput`<sup>Optional</sup> <a name="containerHostnameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostnameInput"></a>

```typescript
public readonly containerHostnameInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `frameworkVersionInput`<sup>Optional</sup> <a name="frameworkVersionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersionInput"></a>

```typescript
public readonly frameworkVersionInput: string;
```

- *Type:* string

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `isCheckpointInput`<sup>Optional</sup> <a name="isCheckpointInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpointInput"></a>

```typescript
public readonly isCheckpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modelInputInput`<sup>Optional</sup> <a name="modelInputInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.modelInputInput"></a>

```typescript
public readonly modelInputInput: IResolvable | SagemakerAlgorithmInferenceSpecificationContainersModelInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersModelInput">SagemakerAlgorithmInferenceSpecificationContainersModelInput</a>

---

##### `nearestModelNameInput`<sup>Optional</sup> <a name="nearestModelNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelNameInput"></a>

```typescript
public readonly nearestModelNameInput: string;
```

- *Type:* string

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `frameworkVersion`<sup>Required</sup> <a name="frameworkVersion" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.frameworkVersion"></a>

```typescript
public readonly frameworkVersion: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `isCheckpoint`<sup>Required</sup> <a name="isCheckpoint" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.isCheckpoint"></a>

```typescript
public readonly isCheckpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nearestModelName`<sup>Required</sup> <a name="nearestModelName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.nearestModelName"></a>

```typescript
public readonly nearestModelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>

---


### SagemakerAlgorithmInferenceSpecificationOutputReference <a name="SagemakerAlgorithmInferenceSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes">resetSupportedContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes">resetSupportedRealtimeInferenceInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes">resetSupportedResponseMimeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes">resetSupportedTransformInstanceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]

---

##### `resetContainers` <a name="resetContainers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetSupportedContentTypes` <a name="resetSupportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedContentTypes"></a>

```typescript
public resetSupportedContentTypes(): void
```

##### `resetSupportedRealtimeInferenceInstanceTypes` <a name="resetSupportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedRealtimeInferenceInstanceTypes"></a>

```typescript
public resetSupportedRealtimeInferenceInstanceTypes(): void
```

##### `resetSupportedResponseMimeTypes` <a name="resetSupportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedResponseMimeTypes"></a>

```typescript
public resetSupportedResponseMimeTypes(): void
```

##### `resetSupportedTransformInstanceTypes` <a name="resetSupportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.resetSupportedTransformInstanceTypes"></a>

```typescript
public resetSupportedTransformInstanceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput">containersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput">supportedContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput">supportedRealtimeInferenceInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput">supportedResponseMimeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput">supportedTransformInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes">supportedRealtimeInferenceInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes">supportedResponseMimeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes">supportedTransformInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containers"></a>

```typescript
public readonly containers: SagemakerAlgorithmInferenceSpecificationContainersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainersList">SagemakerAlgorithmInferenceSpecificationContainersList</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | SagemakerAlgorithmInferenceSpecificationContainers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationContainers">SagemakerAlgorithmInferenceSpecificationContainers</a>[]

---

##### `supportedContentTypesInput`<sup>Optional</sup> <a name="supportedContentTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypesInput"></a>

```typescript
public readonly supportedContentTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedRealtimeInferenceInstanceTypesInput`<sup>Optional</sup> <a name="supportedRealtimeInferenceInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypesInput"></a>

```typescript
public readonly supportedRealtimeInferenceInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedResponseMimeTypesInput`<sup>Optional</sup> <a name="supportedResponseMimeTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypesInput"></a>

```typescript
public readonly supportedResponseMimeTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedTransformInstanceTypesInput`<sup>Optional</sup> <a name="supportedTransformInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypesInput"></a>

```typescript
public readonly supportedTransformInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

---

##### `supportedRealtimeInferenceInstanceTypes`<sup>Required</sup> <a name="supportedRealtimeInferenceInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedRealtimeInferenceInstanceTypes"></a>

```typescript
public readonly supportedRealtimeInferenceInstanceTypes: string[];
```

- *Type:* string[]

---

##### `supportedResponseMimeTypes`<sup>Required</sup> <a name="supportedResponseMimeTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedResponseMimeTypes"></a>

```typescript
public readonly supportedResponseMimeTypes: string[];
```

- *Type:* string[]

---

##### `supportedTransformInstanceTypes`<sup>Required</sup> <a name="supportedTransformInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.supportedTransformInstanceTypes"></a>

```typescript
public readonly supportedTransformInstanceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmInferenceSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmInferenceSpecification">SagemakerAlgorithmInferenceSpecification</a>

---


### SagemakerAlgorithmTagsList <a name="SagemakerAlgorithmTagsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>[]

---


### SagemakerAlgorithmTagsOutputReference <a name="SagemakerAlgorithmTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTags">SagemakerAlgorithmTags</a>

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]

---


### SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>

---


### SagemakerAlgorithmTrainingSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions">putMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters">putSupportedHyperParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics">putSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels">putTrainingChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions">resetMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters">resetSupportedHyperParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics">resetSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining">resetSupportsDistributedTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest">resetTrainingImageDigest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinitions` <a name="putMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions"></a>

```typescript
public putMetricDefinitions(value: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]

---

##### `putSupportedHyperParameters` <a name="putSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters"></a>

```typescript
public putSupportedHyperParameters(value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedHyperParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]

---

##### `putSupportedTuningJobObjectiveMetrics` <a name="putSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics"></a>

```typescript
public putSupportedTuningJobObjectiveMetrics(value: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putSupportedTuningJobObjectiveMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]

---

##### `putTrainingChannels` <a name="putTrainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels"></a>

```typescript
public putTrainingChannels(value: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.putTrainingChannels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]

---

##### `resetMetricDefinitions` <a name="resetMetricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetMetricDefinitions"></a>

```typescript
public resetMetricDefinitions(): void
```

##### `resetSupportedHyperParameters` <a name="resetSupportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedHyperParameters"></a>

```typescript
public resetSupportedHyperParameters(): void
```

##### `resetSupportedTuningJobObjectiveMetrics` <a name="resetSupportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportedTuningJobObjectiveMetrics"></a>

```typescript
public resetSupportedTuningJobObjectiveMetrics(): void
```

##### `resetSupportsDistributedTraining` <a name="resetSupportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetSupportsDistributedTraining"></a>

```typescript
public resetSupportsDistributedTraining(): void
```

##### `resetTrainingImageDigest` <a name="resetTrainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.resetTrainingImageDigest"></a>

```typescript
public resetTrainingImageDigest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters">supportedHyperParameters</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics">supportedTuningJobObjectiveMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels">trainingChannels</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput">metricDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput">supportedHyperParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput">supportedTrainingInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput">supportedTuningJobObjectiveMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput">supportsDistributedTrainingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput">trainingChannelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput">trainingImageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput">trainingImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes">supportedTrainingInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining">supportsDistributedTraining</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage">trainingImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest">trainingImageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList">SagemakerAlgorithmTrainingSpecificationMetricDefinitionsList</a>

---

##### `supportedHyperParameters`<sup>Required</sup> <a name="supportedHyperParameters" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParameters"></a>

```typescript
public readonly supportedHyperParameters: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList</a>

---

##### `supportedTuningJobObjectiveMetrics`<sup>Required</sup> <a name="supportedTuningJobObjectiveMetrics" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetrics"></a>

```typescript
public readonly supportedTuningJobObjectiveMetrics: SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList</a>

---

##### `trainingChannels`<sup>Required</sup> <a name="trainingChannels" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannels"></a>

```typescript
public readonly trainingChannels: SagemakerAlgorithmTrainingSpecificationTrainingChannelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList">SagemakerAlgorithmTrainingSpecificationTrainingChannelsList</a>

---

##### `metricDefinitionsInput`<sup>Optional</sup> <a name="metricDefinitionsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.metricDefinitionsInput"></a>

```typescript
public readonly metricDefinitionsInput: IResolvable | SagemakerAlgorithmTrainingSpecificationMetricDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationMetricDefinitions">SagemakerAlgorithmTrainingSpecificationMetricDefinitions</a>[]

---

##### `supportedHyperParametersInput`<sup>Optional</sup> <a name="supportedHyperParametersInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedHyperParametersInput"></a>

```typescript
public readonly supportedHyperParametersInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]

---

##### `supportedTrainingInstanceTypesInput`<sup>Optional</sup> <a name="supportedTrainingInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypesInput"></a>

```typescript
public readonly supportedTrainingInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedTuningJobObjectiveMetricsInput`<sup>Optional</sup> <a name="supportedTuningJobObjectiveMetricsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTuningJobObjectiveMetricsInput"></a>

```typescript
public readonly supportedTuningJobObjectiveMetricsInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]

---

##### `supportsDistributedTrainingInput`<sup>Optional</sup> <a name="supportsDistributedTrainingInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTrainingInput"></a>

```typescript
public readonly supportsDistributedTrainingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trainingChannelsInput`<sup>Optional</sup> <a name="trainingChannelsInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingChannelsInput"></a>

```typescript
public readonly trainingChannelsInput: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]

---

##### `trainingImageDigestInput`<sup>Optional</sup> <a name="trainingImageDigestInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigestInput"></a>

```typescript
public readonly trainingImageDigestInput: string;
```

- *Type:* string

---

##### `trainingImageInput`<sup>Optional</sup> <a name="trainingImageInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageInput"></a>

```typescript
public readonly trainingImageInput: string;
```

- *Type:* string

---

##### `supportedTrainingInstanceTypes`<sup>Required</sup> <a name="supportedTrainingInstanceTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportedTrainingInstanceTypes"></a>

```typescript
public readonly supportedTrainingInstanceTypes: string[];
```

- *Type:* string[]

---

##### `supportsDistributedTraining`<sup>Required</sup> <a name="supportsDistributedTraining" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.supportsDistributedTraining"></a>

```typescript
public readonly supportsDistributedTraining: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trainingImage`<sup>Required</sup> <a name="trainingImage" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImage"></a>

```typescript
public readonly trainingImage: string;
```

- *Type:* string

---

##### `trainingImageDigest`<sup>Required</sup> <a name="trainingImageDigest" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.trainingImageDigest"></a>

```typescript
public readonly trainingImageDigest: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecification">SagemakerAlgorithmTrainingSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>[]

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable">resetIsTunable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange"></a>

```typescript
public putRange(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetIsTunable` <a name="resetIsTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetIsTunable"></a>

```typescript
public resetIsTunable(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput">isTunableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput">rangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable">isTunable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.range"></a>

```typescript
public readonly range: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTunableInput`<sup>Optional</sup> <a name="isTunableInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunableInput"></a>

```typescript
public readonly isTunableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isTunable`<sup>Required</sup> <a name="isTunable" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.isTunable"></a>

```typescript
public readonly isTunable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters">SagemakerAlgorithmTrainingSpecificationSupportedHyperParameters</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput">minValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: string;
```

- *Type:* string

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput">minValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: string;
```

- *Type:* string

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification">putCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification">putContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification">putIntegerParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification">resetCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification">resetContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification">resetIntegerParameterRangeSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCategoricalParameterRangeSpecification` <a name="putCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification"></a>

```typescript
public putCategoricalParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putCategoricalParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---

##### `putContinuousParameterRangeSpecification` <a name="putContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification"></a>

```typescript
public putContinuousParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putContinuousParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---

##### `putIntegerParameterRangeSpecification` <a name="putIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification"></a>

```typescript
public putIntegerParameterRangeSpecification(value: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.putIntegerParameterRangeSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---

##### `resetCategoricalParameterRangeSpecification` <a name="resetCategoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetCategoricalParameterRangeSpecification"></a>

```typescript
public resetCategoricalParameterRangeSpecification(): void
```

##### `resetContinuousParameterRangeSpecification` <a name="resetContinuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetContinuousParameterRangeSpecification"></a>

```typescript
public resetContinuousParameterRangeSpecification(): void
```

##### `resetIntegerParameterRangeSpecification` <a name="resetIntegerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.resetIntegerParameterRangeSpecification"></a>

```typescript
public resetIntegerParameterRangeSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification">categoricalParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification">continuousParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification">integerParameterRangeSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput">categoricalParameterRangeSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput">continuousParameterRangeSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput">integerParameterRangeSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoricalParameterRangeSpecification`<sup>Required</sup> <a name="categoricalParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecification"></a>

```typescript
public readonly categoricalParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecificationOutputReference</a>

---

##### `continuousParameterRangeSpecification`<sup>Required</sup> <a name="continuousParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecification"></a>

```typescript
public readonly continuousParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecificationOutputReference</a>

---

##### `integerParameterRangeSpecification`<sup>Required</sup> <a name="integerParameterRangeSpecification" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecification"></a>

```typescript
public readonly integerParameterRangeSpecification: SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecificationOutputReference</a>

---

##### `categoricalParameterRangeSpecificationInput`<sup>Optional</sup> <a name="categoricalParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.categoricalParameterRangeSpecificationInput"></a>

```typescript
public readonly categoricalParameterRangeSpecificationInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeCategoricalParameterRangeSpecification</a>

---

##### `continuousParameterRangeSpecificationInput`<sup>Optional</sup> <a name="continuousParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.continuousParameterRangeSpecificationInput"></a>

```typescript
public readonly continuousParameterRangeSpecificationInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeContinuousParameterRangeSpecification</a>

---

##### `integerParameterRangeSpecificationInput`<sup>Optional</sup> <a name="integerParameterRangeSpecificationInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.integerParameterRangeSpecificationInput"></a>

```typescript
public readonly integerParameterRangeSpecificationInput: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeIntegerParameterRangeSpecification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange">SagemakerAlgorithmTrainingSpecificationSupportedHyperParametersRange</a>

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>[]

---


### SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics">SagemakerAlgorithmTrainingSpecificationSupportedTuningJobObjectiveMetrics</a>

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsList <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsList" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get"></a>

```typescript
public get(index: number): SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>[]

---


### SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference <a name="SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer"></a>

```typescript
import { sagemakerAlgorithm } from '@cdktn/provider-awscc'

new sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes">resetSupportedCompressionTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetIsRequired"></a>

```typescript
public resetIsRequired(): void
```

##### `resetSupportedCompressionTypes` <a name="resetSupportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.resetSupportedCompressionTypes"></a>

```typescript
public resetSupportedCompressionTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput">supportedCompressionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput">supportedContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput">supportedInputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired">isRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes">supportedCompressionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes">supportedContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes">supportedInputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequiredInput"></a>

```typescript
public readonly isRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `supportedCompressionTypesInput`<sup>Optional</sup> <a name="supportedCompressionTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypesInput"></a>

```typescript
public readonly supportedCompressionTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedContentTypesInput`<sup>Optional</sup> <a name="supportedContentTypesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypesInput"></a>

```typescript
public readonly supportedContentTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedInputModesInput`<sup>Optional</sup> <a name="supportedInputModesInput" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModesInput"></a>

```typescript
public readonly supportedInputModesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.isRequired"></a>

```typescript
public readonly isRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedCompressionTypes`<sup>Required</sup> <a name="supportedCompressionTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedCompressionTypes"></a>

```typescript
public readonly supportedCompressionTypes: string[];
```

- *Type:* string[]

---

##### `supportedContentTypes`<sup>Required</sup> <a name="supportedContentTypes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedContentTypes"></a>

```typescript
public readonly supportedContentTypes: string[];
```

- *Type:* string[]

---

##### `supportedInputModes`<sup>Required</sup> <a name="supportedInputModes" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.supportedInputModes"></a>

```typescript
public readonly supportedInputModes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAlgorithmTrainingSpecificationTrainingChannels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAlgorithm.SagemakerAlgorithmTrainingSpecificationTrainingChannels">SagemakerAlgorithmTrainingSpecificationTrainingChannels</a>

---



