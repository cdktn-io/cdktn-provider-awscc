# `cloudwatchLogAlarm` Submodule <a name="`cloudwatchLogAlarm` Submodule" id="@cdktn/provider-awscc.cloudwatchLogAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAlarm <a name="CloudwatchLogAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarm(scope: Construct, id: string, config: CloudwatchLogAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig">CloudwatchLogAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration">putScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration">putWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount">resetActionLogLineCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn">resetActionLogLineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled">resetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription">resetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName">resetAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions">resetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions">resetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration">resetWarmUpConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduledQueryConfiguration` <a name="putScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration"></a>

```typescript
public putScheduledQueryConfiguration(value: CloudwatchLogAlarmScheduledQueryConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putScheduledQueryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchLogAlarmTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---

##### `putWarmUpConfiguration` <a name="putWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration"></a>

```typescript
public putWarmUpConfiguration(value: CloudwatchLogAlarmWarmUpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.putWarmUpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---

##### `resetActionLogLineCount` <a name="resetActionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineCount"></a>

```typescript
public resetActionLogLineCount(): void
```

##### `resetActionLogLineRoleArn` <a name="resetActionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionLogLineRoleArn"></a>

```typescript
public resetActionLogLineRoleArn(): void
```

##### `resetActionsEnabled` <a name="resetActionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetActionsEnabled"></a>

```typescript
public resetActionsEnabled(): void
```

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmActions"></a>

```typescript
public resetAlarmActions(): void
```

##### `resetAlarmDescription` <a name="resetAlarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmDescription"></a>

```typescript
public resetAlarmDescription(): void
```

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetAlarmName"></a>

```typescript
public resetAlarmName(): void
```

##### `resetInsufficientDataActions` <a name="resetInsufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetInsufficientDataActions"></a>

```typescript
public resetInsufficientDataActions(): void
```

##### `resetOkActions` <a name="resetOkActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetOkActions"></a>

```typescript
public resetOkActions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetTreatMissingData"></a>

```typescript
public resetTreatMissingData(): void
```

##### `resetWarmUpConfiguration` <a name="resetWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.resetWarmUpConfiguration"></a>

```typescript
public resetWarmUpConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchLogAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration">warmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput">actionLogLineCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput">actionLogLineRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput">actionsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput">alarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput">alarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput">insufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput">okActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput">queryResultsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput">queryResultsToEvaluateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput">scheduledQueryConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput">warmUpConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount">actionLogLineCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions">okActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfiguration"></a>

```typescript
public readonly scheduledQueryConfiguration: CloudwatchLogAlarmScheduledQueryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tags"></a>

```typescript
public readonly tags: CloudwatchLogAlarmTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList">CloudwatchLogAlarmTagsList</a>

---

##### `warmUpConfiguration`<sup>Required</sup> <a name="warmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfiguration"></a>

```typescript
public readonly warmUpConfiguration: CloudwatchLogAlarmWarmUpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference">CloudwatchLogAlarmWarmUpConfigurationOutputReference</a>

---

##### `actionLogLineCountInput`<sup>Optional</sup> <a name="actionLogLineCountInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCountInput"></a>

```typescript
public readonly actionLogLineCountInput: number;
```

- *Type:* number

---

##### `actionLogLineRoleArnInput`<sup>Optional</sup> <a name="actionLogLineRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArnInput"></a>

```typescript
public readonly actionLogLineRoleArnInput: string;
```

- *Type:* string

---

##### `actionsEnabledInput`<sup>Optional</sup> <a name="actionsEnabledInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabledInput"></a>

```typescript
public readonly actionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActionsInput"></a>

```typescript
public readonly alarmActionsInput: string[];
```

- *Type:* string[]

---

##### `alarmDescriptionInput`<sup>Optional</sup> <a name="alarmDescriptionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescriptionInput"></a>

```typescript
public readonly alarmDescriptionInput: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `insufficientDataActionsInput`<sup>Optional</sup> <a name="insufficientDataActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActionsInput"></a>

```typescript
public readonly insufficientDataActionsInput: string[];
```

- *Type:* string[]

---

##### `okActionsInput`<sup>Optional</sup> <a name="okActionsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActionsInput"></a>

```typescript
public readonly okActionsInput: string[];
```

- *Type:* string[]

---

##### `queryResultsToAlarmInput`<sup>Optional</sup> <a name="queryResultsToAlarmInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarmInput"></a>

```typescript
public readonly queryResultsToAlarmInput: number;
```

- *Type:* number

---

##### `queryResultsToEvaluateInput`<sup>Optional</sup> <a name="queryResultsToEvaluateInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluateInput"></a>

```typescript
public readonly queryResultsToEvaluateInput: number;
```

- *Type:* number

---

##### `scheduledQueryConfigurationInput`<sup>Optional</sup> <a name="scheduledQueryConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.scheduledQueryConfigurationInput"></a>

```typescript
public readonly scheduledQueryConfigurationInput: IResolvable | CloudwatchLogAlarmScheduledQueryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchLogAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingDataInput"></a>

```typescript
public readonly treatMissingDataInput: string;
```

- *Type:* string

---

##### `warmUpConfigurationInput`<sup>Optional</sup> <a name="warmUpConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.warmUpConfigurationInput"></a>

```typescript
public readonly warmUpConfigurationInput: IResolvable | CloudwatchLogAlarmWarmUpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---

##### `actionLogLineCount`<sup>Required</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineCount"></a>

```typescript
public readonly actionLogLineCount: number;
```

- *Type:* number

---

##### `actionLogLineRoleArn`<sup>Required</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionLogLineRoleArn"></a>

```typescript
public readonly actionLogLineRoleArn: string;
```

- *Type:* string

---

##### `actionsEnabled`<sup>Required</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

---

##### `alarmDescription`<sup>Required</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `insufficientDataActions`<sup>Required</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

---

##### `okActions`<sup>Required</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToAlarm"></a>

```typescript
public readonly queryResultsToAlarm: number;
```

- *Type:* number

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.queryResultsToEvaluate"></a>

```typescript
public readonly queryResultsToEvaluate: number;
```

- *Type:* number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAlarmConfig <a name="CloudwatchLogAlarmConfig" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmConfig: cloudwatchLogAlarm.CloudwatchLogAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The arithmetic operation to use when comparing the specified threshold and the query results. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm">queryResultsToAlarm</a></code> | <code>number</code> | The number of query results that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate">queryResultsToEvaluate</a></code> | <code>number</code> | The number of query results over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration">scheduledQueryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | The scheduled query configuration for the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold">threshold</a></code> | <code>number</code> | The value to compare against the results of the scheduled query evaluation. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount">actionLogLineCount</a></code> | <code>number</code> | The number of log lines to include in alarm notifications. Valid values are 0 to 50. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn">actionLogLineRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled">actionsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions">alarmActions</a></code> | <code>string[]</code> | The list of actions to execute when this alarm transitions into an ALARM state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | The description of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName">alarmName</a></code> | <code>string</code> | The name of the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions">insufficientDataActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions">okActions</a></code> | <code>string[]</code> | The actions to execute when this alarm transitions to the OK state from any other state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | A list of key-value pairs to associate with the log alarm. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration">warmUpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | The warm-up configuration for the alarm. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The arithmetic operation to use when comparing the specified threshold and the query results.

Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#comparison_operator CloudwatchLogAlarm#comparison_operator}

---

##### `queryResultsToAlarm`<sup>Required</sup> <a name="queryResultsToAlarm" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToAlarm"></a>

```typescript
public readonly queryResultsToAlarm: number;
```

- *Type:* number

The number of query results that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CloudwatchLogAlarm#query_results_to_alarm}

---

##### `queryResultsToEvaluate`<sup>Required</sup> <a name="queryResultsToEvaluate" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.queryResultsToEvaluate"></a>

```typescript
public readonly queryResultsToEvaluate: number;
```

- *Type:* number

The number of query results over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CloudwatchLogAlarm#query_results_to_evaluate}

---

##### `scheduledQueryConfiguration`<sup>Required</sup> <a name="scheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.scheduledQueryConfiguration"></a>

```typescript
public readonly scheduledQueryConfiguration: CloudwatchLogAlarmScheduledQueryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

The scheduled query configuration for the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CloudwatchLogAlarm#scheduled_query_configuration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The value to compare against the results of the scheduled query evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#threshold CloudwatchLogAlarm#threshold}

---

##### `actionLogLineCount`<sup>Optional</sup> <a name="actionLogLineCount" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineCount"></a>

```typescript
public readonly actionLogLineCount: number;
```

- *Type:* number

The number of log lines to include in alarm notifications. Valid values are 0 to 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_count CloudwatchLogAlarm#action_log_line_count}

---

##### `actionLogLineRoleArn`<sup>Optional</sup> <a name="actionLogLineRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionLogLineRoleArn"></a>

```typescript
public readonly actionLogLineRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications.

Required when ActionLogLineCount is greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CloudwatchLogAlarm#action_log_line_role_arn}

---

##### `actionsEnabled`<sup>Optional</sup> <a name="actionsEnabled" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.actionsEnabled"></a>

```typescript
public readonly actionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#actions_enabled CloudwatchLogAlarm#actions_enabled}

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmActions"></a>

```typescript
public readonly alarmActions: string[];
```

- *Type:* string[]

The list of actions to execute when this alarm transitions into an ALARM state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_actions CloudwatchLogAlarm#alarm_actions}

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

The description of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_description CloudwatchLogAlarm#alarm_description}

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The name of the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#alarm_name CloudwatchLogAlarm#alarm_name}

---

##### `insufficientDataActions`<sup>Optional</sup> <a name="insufficientDataActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.insufficientDataActions"></a>

```typescript
public readonly insufficientDataActions: string[];
```

- *Type:* string[]

The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CloudwatchLogAlarm#insufficient_data_actions}

---

##### `okActions`<sup>Optional</sup> <a name="okActions" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.okActions"></a>

```typescript
public readonly okActions: string[];
```

- *Type:* string[]

The actions to execute when this alarm transitions to the OK state from any other state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#ok_actions CloudwatchLogAlarm#ok_actions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchLogAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

A list of key-value pairs to associate with the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#treat_missing_data CloudwatchLogAlarm#treat_missing_data}

---

##### `warmUpConfiguration`<sup>Optional</sup> <a name="warmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmConfig.property.warmUpConfiguration"></a>

```typescript
public readonly warmUpConfiguration: CloudwatchLogAlarmWarmUpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

The warm-up configuration for the alarm.

During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. For more information, see Alarm warm-up periods in the Amazon CloudWatch User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_configuration CloudwatchLogAlarm#warm_up_configuration}

---

### CloudwatchLogAlarmScheduledQueryConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmScheduledQueryConfiguration: cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression">aggregationExpression</a></code> | <code>string</code> | The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString">queryString</a></code> | <code>string</code> | The query string to execute against the specified log groups. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | The schedule configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn">scheduledQueryRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that grants permissions to execute the scheduled query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>string[]</code> | The log groups to query. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | A list of key-value pairs to associate with the scheduled query that backs the log alarm. |

---

##### `aggregationExpression`<sup>Required</sup> <a name="aggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.aggregationExpression"></a>

```typescript
public readonly aggregationExpression: string;
```

- *Type:* string

The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#aggregation_expression CloudwatchLogAlarm#aggregation_expression}

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The query string to execute against the specified log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#query_string CloudwatchLogAlarm#query_string}

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

The schedule configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_configuration CloudwatchLogAlarm#schedule_configuration}

---

##### `scheduledQueryRoleArn`<sup>Required</sup> <a name="scheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.scheduledQueryRoleArn"></a>

```typescript
public readonly scheduledQueryRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that grants permissions to execute the scheduled query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CloudwatchLogAlarm#scheduled_query_role_arn}

---

##### `logGroupIdentifiers`<sup>Optional</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.logGroupIdentifiers"></a>

```typescript
public readonly logGroupIdentifiers: string[];
```

- *Type:* string[]

The log groups to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#log_group_identifiers CloudwatchLogAlarm#log_group_identifiers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

A list of key-value pairs to associate with the scheduled query that backs the log alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#tags CloudwatchLogAlarm#tags}

---

### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration: cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | The expression that defines when the scheduled query runs, e.g. rate(1 minute). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset">startTimeOffset</a></code> | <code>number</code> | The number of seconds into the past to start the query window. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset">endTimeOffset</a></code> | <code>number</code> | The number of seconds into the past to end the query window. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

The expression that defines when the scheduled query runs, e.g. rate(1 minute).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#schedule_expression CloudwatchLogAlarm#schedule_expression}

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: number;
```

- *Type:* number

The number of seconds into the past to start the query window.

Must be a positive value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#start_time_offset CloudwatchLogAlarm#start_time_offset}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: number;
```

- *Type:* number

The number of seconds into the past to end the query window.

Must be a non-negative value and cannot exceed 2592000 seconds (30 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#end_time_offset CloudwatchLogAlarm#end_time_offset}

---

### CloudwatchLogAlarmScheduledQueryConfigurationTags <a name="CloudwatchLogAlarmScheduledQueryConfigurationTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmScheduledQueryConfigurationTags: cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key">key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmTags <a name="CloudwatchLogAlarmTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmTags: cloudwatchLogAlarm.CloudwatchLogAlarmTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key">key</a></code> | <code>string</code> | A unique identifier for the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value">value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique identifier for the tag.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#key CloudwatchLogAlarm#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#value CloudwatchLogAlarm#value}

---

### CloudwatchLogAlarmWarmUpConfiguration <a name="CloudwatchLogAlarmWarmUpConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

const cloudwatchLogAlarmWarmUpConfiguration: cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">onlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the alarm waits for the full warm-up period before it starts evaluating. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes">warmUpPeriodDurationInMinutes</a></code> | <code>number</code> | The length of the warm-up period, in minutes. |

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Optional</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```typescript
public readonly onlyStartEvaluatingAfterWarmUpPeriodEnds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the alarm waits for the full warm-up period before it starts evaluating.

If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#only_start_evaluating_after_warm_up_period_ends CloudwatchLogAlarm#only_start_evaluating_after_warm_up_period_ends}

---

##### `warmUpPeriodDurationInMinutes`<sup>Optional</sup> <a name="warmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration.property.warmUpPeriodDurationInMinutes"></a>

```typescript
public readonly warmUpPeriodDurationInMinutes: number;
```

- *Type:* number

The length of the warm-up period, in minutes.

For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2,880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_log_alarm#warm_up_period_duration_in_minutes CloudwatchLogAlarm#warm_up_period_duration_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogAlarmScheduledQueryConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration">putScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers">resetLogGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduleConfiguration` <a name="putScheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration"></a>

```typescript
public putScheduleConfiguration(value: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putScheduleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---

##### `resetLogGroupIdentifiers` <a name="resetLogGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetLogGroupIdentifiers"></a>

```typescript
public resetLogGroupIdentifiers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput">aggregationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput">logGroupIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput">scheduleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput">scheduledQueryRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression">aggregationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers">logGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn">scheduledQueryRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tags"></a>

```typescript
public readonly tags: CloudwatchLogAlarmScheduledQueryConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList">CloudwatchLogAlarmScheduledQueryConfigurationTagsList</a>

---

##### `aggregationExpressionInput`<sup>Optional</sup> <a name="aggregationExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpressionInput"></a>

```typescript
public readonly aggregationExpressionInput: string;
```

- *Type:* string

---

##### `logGroupIdentifiersInput`<sup>Optional</sup> <a name="logGroupIdentifiersInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiersInput"></a>

```typescript
public readonly logGroupIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `scheduleConfigurationInput`<sup>Optional</sup> <a name="scheduleConfigurationInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduleConfigurationInput"></a>

```typescript
public readonly scheduleConfigurationInput: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---

##### `scheduledQueryRoleArnInput`<sup>Optional</sup> <a name="scheduledQueryRoleArnInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArnInput"></a>

```typescript
public readonly scheduledQueryRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---

##### `aggregationExpression`<sup>Required</sup> <a name="aggregationExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.aggregationExpression"></a>

```typescript
public readonly aggregationExpression: string;
```

- *Type:* string

---

##### `logGroupIdentifiers`<sup>Required</sup> <a name="logGroupIdentifiers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.logGroupIdentifiers"></a>

```typescript
public readonly logGroupIdentifiers: string[];
```

- *Type:* string[]

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `scheduledQueryRoleArn`<sup>Required</sup> <a name="scheduledQueryRoleArn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.scheduledQueryRoleArn"></a>

```typescript
public readonly scheduledQueryRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmScheduledQueryConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfiguration">CloudwatchLogAlarmScheduledQueryConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.resetEndTimeOffset"></a>

```typescript
public resetEndTimeOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffsetInput"></a>

```typescript
public readonly endTimeOffsetInput: number;
```

- *Type:* number

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffsetInput"></a>

```typescript
public readonly startTimeOffsetInput: number;
```

- *Type:* number

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: number;
```

- *Type:* number

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration">CloudwatchLogAlarmScheduledQueryConfigurationScheduleConfiguration</a>

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsList <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get"></a>

```typescript
public get(index: number): CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>[]

---


### CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference <a name="CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmScheduledQueryConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmScheduledQueryConfigurationTags">CloudwatchLogAlarmScheduledQueryConfigurationTags</a>

---


### CloudwatchLogAlarmTagsList <a name="CloudwatchLogAlarmTagsList" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get"></a>

```typescript
public get(index: number): CloudwatchLogAlarmTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>[]

---


### CloudwatchLogAlarmTagsOutputReference <a name="CloudwatchLogAlarmTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmTags">CloudwatchLogAlarmTags</a>

---


### CloudwatchLogAlarmWarmUpConfigurationOutputReference <a name="CloudwatchLogAlarmWarmUpConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogAlarm } from '@cdktn/provider-awscc'

new cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds">resetOnlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes">resetWarmUpPeriodDurationInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnlyStartEvaluatingAfterWarmUpPeriodEnds` <a name="resetOnlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetOnlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```typescript
public resetOnlyStartEvaluatingAfterWarmUpPeriodEnds(): void
```

##### `resetWarmUpPeriodDurationInMinutes` <a name="resetWarmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.resetWarmUpPeriodDurationInMinutes"></a>

```typescript
public resetWarmUpPeriodDurationInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput">onlyStartEvaluatingAfterWarmUpPeriodEndsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput">warmUpPeriodDurationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds">onlyStartEvaluatingAfterWarmUpPeriodEnds</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes">warmUpPeriodDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEndsInput`<sup>Optional</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEndsInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEndsInput"></a>

```typescript
public readonly onlyStartEvaluatingAfterWarmUpPeriodEndsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `warmUpPeriodDurationInMinutesInput`<sup>Optional</sup> <a name="warmUpPeriodDurationInMinutesInput" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutesInput"></a>

```typescript
public readonly warmUpPeriodDurationInMinutesInput: number;
```

- *Type:* number

---

##### `onlyStartEvaluatingAfterWarmUpPeriodEnds`<sup>Required</sup> <a name="onlyStartEvaluatingAfterWarmUpPeriodEnds" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.onlyStartEvaluatingAfterWarmUpPeriodEnds"></a>

```typescript
public readonly onlyStartEvaluatingAfterWarmUpPeriodEnds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `warmUpPeriodDurationInMinutes`<sup>Required</sup> <a name="warmUpPeriodDurationInMinutes" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.warmUpPeriodDurationInMinutes"></a>

```typescript
public readonly warmUpPeriodDurationInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogAlarmWarmUpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchLogAlarm.CloudwatchLogAlarmWarmUpConfiguration">CloudwatchLogAlarmWarmUpConfiguration</a>

---



