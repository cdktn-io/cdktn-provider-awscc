# `frauddetectorDetector` Submodule <a name="`frauddetectorDetector` Submodule" id="@cdktn/provider-awscc.frauddetectorDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorDetector <a name="FrauddetectorDetector" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector awscc_frauddetector_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetector(scope: Construct, id: string, config: FrauddetectorDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig">FrauddetectorDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig">FrauddetectorDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels">putAssociatedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType">putEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels">resetAssociatedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus">resetDetectorVersionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode">resetRuleExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedModels` <a name="putAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels"></a>

```typescript
public putAssociatedModels(value: IResolvable | FrauddetectorDetectorAssociatedModels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]

---

##### `putEventType` <a name="putEventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType"></a>

```typescript
public putEventType(value: FrauddetectorDetectorEventType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules"></a>

```typescript
public putRules(value: IResolvable | FrauddetectorDetectorRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]

---

##### `resetAssociatedModels` <a name="resetAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels"></a>

```typescript
public resetAssociatedModels(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDetectorVersionStatus` <a name="resetDetectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus"></a>

```typescript
public resetDetectorVersionStatus(): void
```

##### `resetRuleExecutionMode` <a name="resetRuleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode"></a>

```typescript
public resetRuleExecutionMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

frauddetectorDetector.FrauddetectorDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

frauddetectorDetector.FrauddetectorDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

frauddetectorDetector.FrauddetectorDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

frauddetectorDetector.FrauddetectorDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrauddetectorDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrauddetectorDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels">associatedModels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId">detectorVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType">eventType</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput">associatedModelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput">detectorVersionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput">eventTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput">ruleExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus">detectorVersionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode">ruleExecutionMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedModels`<sup>Required</sup> <a name="associatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels"></a>

```typescript
public readonly associatedModels: FrauddetectorDetectorAssociatedModelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `detectorVersionId`<sup>Required</sup> <a name="detectorVersionId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId"></a>

```typescript
public readonly detectorVersionId: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType"></a>

```typescript
public readonly eventType: FrauddetectorDetectorEventTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules"></a>

```typescript
public readonly rules: FrauddetectorDetectorRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a>

---

##### `associatedModelsInput`<sup>Optional</sup> <a name="associatedModelsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput"></a>

```typescript
public readonly associatedModelsInput: IResolvable | FrauddetectorDetectorAssociatedModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `detectorVersionStatusInput`<sup>Optional</sup> <a name="detectorVersionStatusInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput"></a>

```typescript
public readonly detectorVersionStatusInput: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: IResolvable | FrauddetectorDetectorEventType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---

##### `ruleExecutionModeInput`<sup>Optional</sup> <a name="ruleExecutionModeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput"></a>

```typescript
public readonly ruleExecutionModeInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | FrauddetectorDetectorRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `detectorVersionStatus`<sup>Required</sup> <a name="detectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus"></a>

```typescript
public readonly detectorVersionStatus: string;
```

- *Type:* string

---

##### `ruleExecutionMode`<sup>Required</sup> <a name="ruleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode"></a>

```typescript
public readonly ruleExecutionMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorDetectorAssociatedModels <a name="FrauddetectorDetectorAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorAssociatedModels: frauddetectorDetector.FrauddetectorDetectorAssociatedModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

### FrauddetectorDetectorConfig <a name="FrauddetectorDetectorConfig" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorConfig: frauddetectorDetector.FrauddetectorDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId">detectorId</a></code> | <code>string</code> | The ID of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType">eventType</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | The event type to associate this detector with. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels">associatedModels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]</code> | The models to associate with this detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description">description</a></code> | <code>string</code> | The description of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus">detectorVersionStatus</a></code> | <code>string</code> | The desired detector version status for the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode">ruleExecutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]</code> | Tags associated with this detector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The ID of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType"></a>

```typescript
public readonly eventType: FrauddetectorDetectorEventType;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

The event type to associate this detector with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | FrauddetectorDetectorRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}.

---

##### `associatedModels`<sup>Optional</sup> <a name="associatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels"></a>

```typescript
public readonly associatedModels: IResolvable | FrauddetectorDetectorAssociatedModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]

The models to associate with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detectorVersionStatus`<sup>Optional</sup> <a name="detectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus"></a>

```typescript
public readonly detectorVersionStatus: string;
```

- *Type:* string

The desired detector version status for the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="ruleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode"></a>

```typescript
public readonly ruleExecutionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]

Tags associated with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventType <a name="FrauddetectorDetectorEventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventType: frauddetectorDetector.FrauddetectorDetectorEventType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description">description</a></code> | <code>string</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes">entityTypes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables">eventVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels">labels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name">name</a></code> | <code>string</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]</code> | Tags associated with this event type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes"></a>

```typescript
public readonly entityTypes: IResolvable | FrauddetectorDetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}.

---

##### `eventVariables`<sup>Optional</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables"></a>

```typescript
public readonly eventVariables: IResolvable | FrauddetectorDetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}.

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels"></a>

```typescript
public readonly labels: IResolvable | FrauddetectorDetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypes <a name="FrauddetectorDetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeEntityTypes: frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the entity type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the entity type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]</code> | Tags associated with this entity type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the entity type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the entity type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]

Tags associated with this entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypesTags <a name="FrauddetectorDetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeEntityTypesTags: frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeEventVariables <a name="FrauddetectorDetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeEventVariables: frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the event variable was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the event variable was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]</code> | Tags associated with this event variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType">variableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the event variable was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the event variable was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]

Tags associated with this event variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}.

---

### FrauddetectorDetectorEventTypeEventVariablesTags <a name="FrauddetectorDetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeEventVariablesTags: frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeLabels <a name="FrauddetectorDetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeLabels: frauddetectorDetector.FrauddetectorDetectorEventTypeLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the label was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the label was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]</code> | Tags associated with this label. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the label was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the label was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]

Tags associated with this label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeLabelsTags <a name="FrauddetectorDetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeLabelsTags: frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeTags <a name="FrauddetectorDetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorEventTypeTags: frauddetectorDetector.FrauddetectorDetectorEventTypeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRules <a name="FrauddetectorDetectorRules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorRules: frauddetectorDetector.FrauddetectorDetectorRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes">outcomes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion">ruleVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detectorId`<sup>Optional</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `outcomes`<sup>Optional</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes"></a>

```typescript
public readonly outcomes: IResolvable | FrauddetectorDetectorRulesOutcomes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}.

---

##### `ruleVersion`<sup>Optional</sup> <a name="ruleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion"></a>

```typescript
public readonly ruleVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorRulesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomes <a name="FrauddetectorDetectorRulesOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorRulesOutcomes: frauddetectorDetector.FrauddetectorDetectorRulesOutcomes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the outcome was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the outcome was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]</code> | Tags associated with this outcome. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the outcome was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the outcome was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorDetectorRulesOutcomesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]

Tags associated with this outcome.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomesTags <a name="FrauddetectorDetectorRulesOutcomesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorRulesOutcomesTags: frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRulesTags <a name="FrauddetectorDetectorRulesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorRulesTags: frauddetectorDetector.FrauddetectorDetectorRulesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorTags <a name="FrauddetectorDetectorTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

const frauddetectorDetectorTags: frauddetectorDetector.FrauddetectorDetectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorDetectorAssociatedModelsList <a name="FrauddetectorDetectorAssociatedModelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorAssociatedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorAssociatedModels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>[]

---


### FrauddetectorDetectorAssociatedModelsOutputReference <a name="FrauddetectorDetectorAssociatedModelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorAssociatedModels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>

---


### FrauddetectorDetectorEventTypeEntityTypesList <a name="FrauddetectorDetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]

---


### FrauddetectorDetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorEventTypeEntityTypesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEntityTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>

---


### FrauddetectorDetectorEventTypeEntityTypesTagsList <a name="FrauddetectorDetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>[]

---


### FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorDetectorEventTypeEventVariablesList <a name="FrauddetectorDetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]

---


### FrauddetectorDetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```typescript
public resetVariableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorEventTypeEventVariablesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEventVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>

---


### FrauddetectorDetectorEventTypeEventVariablesTagsList <a name="FrauddetectorDetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>[]

---


### FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorDetectorEventTypeLabelsList <a name="FrauddetectorDetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]

---


### FrauddetectorDetectorEventTypeLabelsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorEventTypeLabelsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorEventTypeLabelsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>

---


### FrauddetectorDetectorEventTypeLabelsTagsList <a name="FrauddetectorDetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>[]

---


### FrauddetectorDetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeLabelsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>

---


### FrauddetectorDetectorEventTypeOutputReference <a name="FrauddetectorDetectorEventTypeOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables">putEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables">resetEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes"></a>

```typescript
public putEntityTypes(value: IResolvable | FrauddetectorDetectorEventTypeEntityTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]

---

##### `putEventVariables` <a name="putEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables"></a>

```typescript
public putEventVariables(value: IResolvable | FrauddetectorDetectorEventTypeEventVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels"></a>

```typescript
public putLabels(value: IResolvable | FrauddetectorDetectorEventTypeLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorEventTypeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes"></a>

```typescript
public resetEntityTypes(): void
```

##### `resetEventVariables` <a name="resetEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables"></a>

```typescript
public resetEventVariables(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables">eventVariables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput">eventVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput">labelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: FrauddetectorDetectorEventTypeEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a>

---

##### `eventVariables`<sup>Required</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables"></a>

```typescript
public readonly eventVariables: FrauddetectorDetectorEventTypeEventVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels"></a>

```typescript
public readonly labels: FrauddetectorDetectorEventTypeLabelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorEventTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput"></a>

```typescript
public readonly entityTypesInput: IResolvable | FrauddetectorDetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>[]

---

##### `eventVariablesInput`<sup>Optional</sup> <a name="eventVariablesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput"></a>

```typescript
public readonly eventVariablesInput: IResolvable | FrauddetectorDetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>[]

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | FrauddetectorDetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---


### FrauddetectorDetectorEventTypeTagsList <a name="FrauddetectorDetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>[]

---


### FrauddetectorDetectorEventTypeTagsOutputReference <a name="FrauddetectorDetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorEventTypeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>

---


### FrauddetectorDetectorRulesList <a name="FrauddetectorDetectorRulesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>[]

---


### FrauddetectorDetectorRulesOutcomesList <a name="FrauddetectorDetectorRulesOutcomesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorRulesOutcomesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesOutcomes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]

---


### FrauddetectorDetectorRulesOutcomesOutputReference <a name="FrauddetectorDetectorRulesOutcomesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorRulesOutcomesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorRulesOutcomesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorRulesOutcomesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesOutcomes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>

---


### FrauddetectorDetectorRulesOutcomesTagsList <a name="FrauddetectorDetectorRulesOutcomesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorRulesOutcomesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesOutcomesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>[]

---


### FrauddetectorDetectorRulesOutcomesTagsOutputReference <a name="FrauddetectorDetectorRulesOutcomesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesOutcomesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>

---


### FrauddetectorDetectorRulesOutputReference <a name="FrauddetectorDetectorRulesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes">putOutcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId">resetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes">resetOutcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion">resetRuleVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutcomes` <a name="putOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes"></a>

```typescript
public putOutcomes(value: IResolvable | FrauddetectorDetectorRulesOutcomes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorDetectorRulesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDetectorId` <a name="resetDetectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId"></a>

```typescript
public resetDetectorId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetOutcomes` <a name="resetOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes"></a>

```typescript
public resetOutcomes(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetRuleVersion` <a name="resetRuleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion"></a>

```typescript
public resetRuleVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes">outcomes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput">outcomesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput">ruleVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion">ruleVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outcomes`<sup>Required</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes"></a>

```typescript
public readonly outcomes: FrauddetectorDetectorRulesOutcomesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorDetectorRulesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `outcomesInput`<sup>Optional</sup> <a name="outcomesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput"></a>

```typescript
public readonly outcomesInput: IResolvable | FrauddetectorDetectorRulesOutcomes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>[]

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `ruleVersionInput`<sup>Optional</sup> <a name="ruleVersionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput"></a>

```typescript
public readonly ruleVersionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorDetectorRulesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion"></a>

```typescript
public readonly ruleVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>

---


### FrauddetectorDetectorRulesTagsList <a name="FrauddetectorDetectorRulesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorRulesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>[]

---


### FrauddetectorDetectorRulesTagsOutputReference <a name="FrauddetectorDetectorRulesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorRulesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>

---


### FrauddetectorDetectorTagsList <a name="FrauddetectorDetectorTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>[]

---


### FrauddetectorDetectorTagsOutputReference <a name="FrauddetectorDetectorTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorDetector } from '@cdktn/provider-awscc'

new frauddetectorDetector.FrauddetectorDetectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorDetectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>

---



