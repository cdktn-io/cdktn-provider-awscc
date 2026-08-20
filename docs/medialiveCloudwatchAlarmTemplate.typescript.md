# `medialiveCloudwatchAlarmTemplate` Submodule <a name="`medialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplate <a name="MedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

new medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate(scope: Construct, id: string, config: MedialiveCloudwatchAlarmTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig">MedialiveCloudwatchAlarmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm"></a>

```typescript
public resetDatapointsToAlarm(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier"></a>

```typescript
public resetGroupIdentifier(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">cloudwatchAlarmTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchAlarmTemplateId`<sup>Required</sup> <a name="cloudwatchAlarmTemplateId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```typescript
public readonly cloudwatchAlarmTemplateId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput"></a>

```typescript
public readonly datapointsToAlarmInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput"></a>

```typescript
public readonly groupIdentifierInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput"></a>

```typescript
public readonly targetResourceTypeInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput"></a>

```typescript
public readonly treatMissingDataInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateConfig <a name="MedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```typescript
import { medialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

const medialiveCloudwatchAlarmTemplateConfig: medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name">name</a></code> | <code>string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic">statistic</a></code> | <code>string</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description">description</a></code> | <code>string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period">period</a></code> | <code>number</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold">threshold</a></code> | <code>number</code> | The threshold value to compare with the specified statistic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---



