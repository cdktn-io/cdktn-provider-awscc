# `logsLogAnomalyDetector` Submodule <a name="`logsLogAnomalyDetector` Submodule" id="@cdktn/provider-awscc.logsLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsLogAnomalyDetector <a name="LogsLogAnomalyDetector" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

new logsLogAnomalyDetector.LogsLogAnomalyDetector(scope: Construct, id: string, config?: LogsLogAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig">LogsLogAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime">resetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName">resetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency">resetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList">resetLogGroupArnList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAnomalyVisibilityTime` <a name="resetAnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```typescript
public resetAnomalyVisibilityTime(): void
```

##### `resetDetectorName` <a name="resetDetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName"></a>

```typescript
public resetDetectorName(): void
```

##### `resetEvaluationFrequency` <a name="resetEvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency"></a>

```typescript
public resetEvaluationFrequency(): void
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern"></a>

```typescript
public resetFilterPattern(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogGroupArnList` <a name="resetLogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList"></a>

```typescript
public resetLogGroupArnList(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus">anomalyDetectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp">creationTimeStamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp">lastModifiedTimeStamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput">anomalyVisibilityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput">detectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput">evaluationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput">logGroupArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName">detectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency">evaluationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList">logGroupArnList</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

---

##### `anomalyDetectorStatus`<sup>Required</sup> <a name="anomalyDetectorStatus" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus"></a>

```typescript
public readonly anomalyDetectorStatus: string;
```

- *Type:* string

---

##### `creationTimeStamp`<sup>Required</sup> <a name="creationTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp"></a>

```typescript
public readonly creationTimeStamp: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTimeStamp`<sup>Required</sup> <a name="lastModifiedTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp"></a>

```typescript
public readonly lastModifiedTimeStamp: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `anomalyVisibilityTimeInput`<sup>Optional</sup> <a name="anomalyVisibilityTimeInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```typescript
public readonly anomalyVisibilityTimeInput: number;
```

- *Type:* number

---

##### `detectorNameInput`<sup>Optional</sup> <a name="detectorNameInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput"></a>

```typescript
public readonly detectorNameInput: string;
```

- *Type:* string

---

##### `evaluationFrequencyInput`<sup>Optional</sup> <a name="evaluationFrequencyInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```typescript
public readonly evaluationFrequencyInput: string;
```

- *Type:* string

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logGroupArnListInput`<sup>Optional</sup> <a name="logGroupArnListInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput"></a>

```typescript
public readonly logGroupArnListInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `anomalyVisibilityTime`<sup>Required</sup> <a name="anomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```typescript
public readonly anomalyVisibilityTime: number;
```

- *Type:* number

---

##### `detectorName`<sup>Required</sup> <a name="detectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName"></a>

```typescript
public readonly detectorName: string;
```

- *Type:* string

---

##### `evaluationFrequency`<sup>Required</sup> <a name="evaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency"></a>

```typescript
public readonly evaluationFrequency: string;
```

- *Type:* string

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList"></a>

```typescript
public readonly logGroupArnList: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsLogAnomalyDetectorConfig <a name="LogsLogAnomalyDetectorConfig" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.Initializer"></a>

```typescript
import { logsLogAnomalyDetector } from '@cdktn/provider-awscc'

const logsLogAnomalyDetectorConfig: logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId">accountId</a></code> | <code>string</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName">detectorName</a></code> | <code>string</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency">evaluationFrequency</a></code> | <code>string</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern">filterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList">logGroupArnList</a></code> | <code>string[]</code> | List of Arns for the given log group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```typescript
public readonly anomalyVisibilityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName"></a>

```typescript
public readonly detectorName: string;
```

- *Type:* string

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```typescript
public readonly evaluationFrequency: string;
```

- *Type:* string

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `logGroupArnList`<sup>Optional</sup> <a name="logGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```typescript
public readonly logGroupArnList: string[];
```

- *Type:* string[]

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---



