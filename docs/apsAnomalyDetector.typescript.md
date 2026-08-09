# `apsAnomalyDetector` Submodule <a name="`apsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.apsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsAnomalyDetector <a name="ApsAnomalyDetector" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector awscc_aps_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetector(scope: Construct, id: string, config: ApsAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig">ApsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig">ApsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction">putMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds">resetEvaluationIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction">resetMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration"></a>

```typescript
public putConfiguration(value: ApsAnomalyDetectorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---

##### `putLabels` <a name="putLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ApsAnomalyDetectorLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]

---

##### `putMissingDataAction` <a name="putMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction"></a>

```typescript
public putMissingDataAction(value: ApsAnomalyDetectorMissingDataAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putMissingDataAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags"></a>

```typescript
public putTags(value: IResolvable | ApsAnomalyDetectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]

---

##### `resetEvaluationIntervalInSeconds` <a name="resetEvaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetEvaluationIntervalInSeconds"></a>

```typescript
public resetEvaluationIntervalInSeconds(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMissingDataAction` <a name="resetMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetMissingDataAction"></a>

```typescript
public resetMissingDataAction(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

apsAnomalyDetector.ApsAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction">missingDataAction</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput">evaluationIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput">labelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput">missingDataActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configuration"></a>

```typescript
public readonly configuration: ApsAnomalyDetectorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference">ApsAnomalyDetectorConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labels"></a>

```typescript
public readonly labels: ApsAnomalyDetectorLabelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList">ApsAnomalyDetectorLabelsList</a>

---

##### `missingDataAction`<sup>Required</sup> <a name="missingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataAction"></a>

```typescript
public readonly missingDataAction: ApsAnomalyDetectorMissingDataActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference">ApsAnomalyDetectorMissingDataActionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tags"></a>

```typescript
public readonly tags: ApsAnomalyDetectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList">ApsAnomalyDetectorTagsList</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | ApsAnomalyDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---

##### `evaluationIntervalInSecondsInput`<sup>Optional</sup> <a name="evaluationIntervalInSecondsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSecondsInput"></a>

```typescript
public readonly evaluationIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ApsAnomalyDetectorLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]

---

##### `missingDataActionInput`<sup>Optional</sup> <a name="missingDataActionInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.missingDataActionInput"></a>

```typescript
public readonly missingDataActionInput: IResolvable | ApsAnomalyDetectorMissingDataAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApsAnomalyDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `evaluationIntervalInSeconds`<sup>Required</sup> <a name="evaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```typescript
public readonly evaluationIntervalInSeconds: number;
```

- *Type:* number

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsAnomalyDetectorConfig <a name="ApsAnomalyDetectorConfig" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorConfig: apsAnomalyDetector.ApsAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias">alias</a></code> | <code>string</code> | The AnomalyDetector alias. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | Determines the anomaly detector's algorithm and its configuration. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace">workspace</a></code> | <code>string</code> | Required to identify a specific APS Workspace associated with this Anomaly Detector. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds">evaluationIntervalInSeconds</a></code> | <code>number</code> | The AnomalyDetector period of detection and metric generation. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels">labels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]</code> | An array of key-value pairs to provide meta-data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction">missingDataAction</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | The action to perform when running the expression returns no data. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The AnomalyDetector alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#alias ApsAnomalyDetector#alias}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.configuration"></a>

```typescript
public readonly configuration: ApsAnomalyDetectorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

Determines the anomaly detector's algorithm and its configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#configuration ApsAnomalyDetector#configuration}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

Required to identify a specific APS Workspace associated with this Anomaly Detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#workspace ApsAnomalyDetector#workspace}

---

##### `evaluationIntervalInSeconds`<sup>Optional</sup> <a name="evaluationIntervalInSeconds" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.evaluationIntervalInSeconds"></a>

```typescript
public readonly evaluationIntervalInSeconds: number;
```

- *Type:* number

The AnomalyDetector period of detection and metric generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#evaluation_interval_in_seconds ApsAnomalyDetector#evaluation_interval_in_seconds}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ApsAnomalyDetectorLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]

An array of key-value pairs to provide meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#labels ApsAnomalyDetector#labels}

---

##### `missingDataAction`<sup>Optional</sup> <a name="missingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.missingDataAction"></a>

```typescript
public readonly missingDataAction: ApsAnomalyDetectorMissingDataAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

The action to perform when running the expression returns no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#missing_data_action ApsAnomalyDetector#missing_data_action}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApsAnomalyDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#tags ApsAnomalyDetector#tags}

---

### ApsAnomalyDetectorConfiguration <a name="ApsAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorConfiguration: apsAnomalyDetector.ApsAnomalyDetectorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest">randomCutForest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}. |

---

##### `randomCutForest`<sup>Required</sup> <a name="randomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration.property.randomCutForest"></a>

```typescript
public readonly randomCutForest: ApsAnomalyDetectorConfigurationRandomCutForest;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#random_cut_forest ApsAnomalyDetector#random_cut_forest}.

---

### ApsAnomalyDetectorConfigurationRandomCutForest <a name="ApsAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorConfigurationRandomCutForest: apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove">ignoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow">ignoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize">sampleSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize">shingleSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#query ApsAnomalyDetector#query}.

---

##### `ignoreNearExpectedFromAbove`<sup>Optional</sup> <a name="ignoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove"></a>

```typescript
public readonly ignoreNearExpectedFromAbove: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_above ApsAnomalyDetector#ignore_near_expected_from_above}.

---

##### `ignoreNearExpectedFromBelow`<sup>Optional</sup> <a name="ignoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow"></a>

```typescript
public readonly ignoreNearExpectedFromBelow: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ignore_near_expected_from_below ApsAnomalyDetector#ignore_near_expected_from_below}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#sample_size ApsAnomalyDetector#sample_size}.

---

##### `shingleSize`<sup>Optional</sup> <a name="shingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest.property.shingleSize"></a>

```typescript
public readonly shingleSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#shingle_size ApsAnomalyDetector#shingle_size}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove: apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio">ratio</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio"></a>

```typescript
public readonly ratio: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow: apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio">ratio</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}. |

---

##### `amount`<sup>Optional</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#amount ApsAnomalyDetector#amount}.

---

##### `ratio`<sup>Optional</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio"></a>

```typescript
public readonly ratio: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#ratio ApsAnomalyDetector#ratio}.

---

### ApsAnomalyDetectorLabels <a name="ApsAnomalyDetectorLabels" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorLabels: apsAnomalyDetector.ApsAnomalyDetectorLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

### ApsAnomalyDetectorMissingDataAction <a name="ApsAnomalyDetectorMissingDataAction" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorMissingDataAction: apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly">markAsAnomaly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip">skip</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}. |

---

##### `markAsAnomaly`<sup>Optional</sup> <a name="markAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.markAsAnomaly"></a>

```typescript
public readonly markAsAnomaly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#mark_as_anomaly ApsAnomalyDetector#mark_as_anomaly}.

---

##### `skip`<sup>Optional</sup> <a name="skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction.property.skip"></a>

```typescript
public readonly skip: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#skip ApsAnomalyDetector#skip}.

---

### ApsAnomalyDetectorTags <a name="ApsAnomalyDetectorTags" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

const apsAnomalyDetectorTags: apsAnomalyDetector.ApsAnomalyDetectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#key ApsAnomalyDetector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_anomaly_detector#value ApsAnomalyDetector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsAnomalyDetectorConfigurationOutputReference <a name="ApsAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest">putRandomCutForest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomCutForest` <a name="putRandomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest"></a>

```typescript
public putRandomCutForest(value: ApsAnomalyDetectorConfigurationRandomCutForest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest">randomCutForest</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput">randomCutForestInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `randomCutForest`<sup>Required</sup> <a name="randomCutForest" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```typescript
public readonly randomCutForest: ApsAnomalyDetectorConfigurationRandomCutForestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a>

---

##### `randomCutForestInput`<sup>Optional</sup> <a name="randomCutForestInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput"></a>

```typescript
public readonly randomCutForestInput: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfiguration">ApsAnomalyDetectorConfiguration</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio">resetRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetRatio` <a name="resetRatio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio"></a>

```typescript
public resetRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput">ratioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">ratio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `ratioInput`<sup>Optional</sup> <a name="ratioInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput"></a>

```typescript
public readonly ratioInput: number;
```

- *Type:* number

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```typescript
public readonly ratio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount">resetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio">resetRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmount` <a name="resetAmount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount"></a>

```typescript
public resetAmount(): void
```

##### `resetRatio` <a name="resetRatio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio"></a>

```typescript
public resetRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput">ratioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">ratio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `ratioInput`<sup>Optional</sup> <a name="ratioInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput"></a>

```typescript
public readonly ratioInput: number;
```

- *Type:* number

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `ratio`<sup>Required</sup> <a name="ratio" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```typescript
public readonly ratio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---


### ApsAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="ApsAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove">putIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow">putIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove">resetIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow">resetIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize">resetShingleSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIgnoreNearExpectedFromAbove` <a name="putIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove"></a>

```typescript
public putIgnoreNearExpectedFromAbove(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---

##### `putIgnoreNearExpectedFromBelow` <a name="putIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow"></a>

```typescript
public putIgnoreNearExpectedFromBelow(value: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---

##### `resetIgnoreNearExpectedFromAbove` <a name="resetIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove"></a>

```typescript
public resetIgnoreNearExpectedFromAbove(): void
```

##### `resetIgnoreNearExpectedFromBelow` <a name="resetIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow"></a>

```typescript
public resetIgnoreNearExpectedFromBelow(): void
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize"></a>

```typescript
public resetSampleSize(): void
```

##### `resetShingleSize` <a name="resetShingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize"></a>

```typescript
public resetShingleSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">ignoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">ignoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput">ignoreNearExpectedFromAboveInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput">ignoreNearExpectedFromBelowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput">shingleSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">shingleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreNearExpectedFromAbove`<sup>Required</sup> <a name="ignoreNearExpectedFromAbove" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```typescript
public readonly ignoreNearExpectedFromAbove: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a>

---

##### `ignoreNearExpectedFromBelow`<sup>Required</sup> <a name="ignoreNearExpectedFromBelow" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```typescript
public readonly ignoreNearExpectedFromBelow: ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a>

---

##### `ignoreNearExpectedFromAboveInput`<sup>Optional</sup> <a name="ignoreNearExpectedFromAboveInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput"></a>

```typescript
public readonly ignoreNearExpectedFromAboveInput: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---

##### `ignoreNearExpectedFromBelowInput`<sup>Optional</sup> <a name="ignoreNearExpectedFromBelowInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput"></a>

```typescript
public readonly ignoreNearExpectedFromBelowInput: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">ApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput"></a>

```typescript
public readonly sampleSizeInput: number;
```

- *Type:* number

---

##### `shingleSizeInput`<sup>Optional</sup> <a name="shingleSizeInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput"></a>

```typescript
public readonly shingleSizeInput: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

##### `shingleSize`<sup>Required</sup> <a name="shingleSize" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```typescript
public readonly shingleSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorConfigurationRandomCutForest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorConfigurationRandomCutForest">ApsAnomalyDetectorConfigurationRandomCutForest</a>

---


### ApsAnomalyDetectorLabelsList <a name="ApsAnomalyDetectorLabelsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get"></a>

```typescript
public get(index: number): ApsAnomalyDetectorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>[]

---


### ApsAnomalyDetectorLabelsOutputReference <a name="ApsAnomalyDetectorLabelsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorLabels">ApsAnomalyDetectorLabels</a>

---


### ApsAnomalyDetectorMissingDataActionOutputReference <a name="ApsAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly">resetMarkAsAnomaly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip">resetSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMarkAsAnomaly` <a name="resetMarkAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly"></a>

```typescript
public resetMarkAsAnomaly(): void
```

##### `resetSkip` <a name="resetSkip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.resetSkip"></a>

```typescript
public resetSkip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput">markAsAnomalyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput">skipInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">markAsAnomaly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip">skip</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `markAsAnomalyInput`<sup>Optional</sup> <a name="markAsAnomalyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput"></a>

```typescript
public readonly markAsAnomalyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skipInput"></a>

```typescript
public readonly skipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `markAsAnomaly`<sup>Required</sup> <a name="markAsAnomaly" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```typescript
public readonly markAsAnomaly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```typescript
public readonly skip: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorMissingDataAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorMissingDataAction">ApsAnomalyDetectorMissingDataAction</a>

---


### ApsAnomalyDetectorTagsList <a name="ApsAnomalyDetectorTagsList" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get"></a>

```typescript
public get(index: number): ApsAnomalyDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>[]

---


### ApsAnomalyDetectorTagsOutputReference <a name="ApsAnomalyDetectorTagsOutputReference" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer"></a>

```typescript
import { apsAnomalyDetector } from '@cdktn/provider-awscc'

new apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsAnomalyDetectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsAnomalyDetector.ApsAnomalyDetectorTags">ApsAnomalyDetectorTags</a>

---



