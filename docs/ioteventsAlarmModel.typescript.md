# `ioteventsAlarmModel` Submodule <a name="`ioteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.ioteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsAlarmModel <a name="IoteventsAlarmModel" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModel(scope: Construct, id: string, config: IoteventsAlarmModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig">IoteventsAlarmModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities">putAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions">putAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule">putAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities">resetAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions">resetAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription">resetAlarmModelDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName">resetAlarmModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarmCapabilities` <a name="putAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities"></a>

```typescript
public putAlarmCapabilities(value: IoteventsAlarmModelAlarmCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `putAlarmEventActions` <a name="putAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions"></a>

```typescript
public putAlarmEventActions(value: IoteventsAlarmModelAlarmEventActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmEventActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `putAlarmRule` <a name="putAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule"></a>

```typescript
public putAlarmRule(value: IoteventsAlarmModelAlarmRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putAlarmRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags"></a>

```typescript
public putTags(value: IResolvable | IoteventsAlarmModelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---

##### `resetAlarmCapabilities` <a name="resetAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmCapabilities"></a>

```typescript
public resetAlarmCapabilities(): void
```

##### `resetAlarmEventActions` <a name="resetAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmEventActions"></a>

```typescript
public resetAlarmEventActions(): void
```

##### `resetAlarmModelDescription` <a name="resetAlarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelDescription"></a>

```typescript
public resetAlarmModelDescription(): void
```

##### `resetAlarmModelName` <a name="resetAlarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetAlarmModelName"></a>

```typescript
public resetAlarmModelName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetSeverity"></a>

```typescript
public resetSeverity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

ioteventsAlarmModel.IoteventsAlarmModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IoteventsAlarmModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities">alarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions">alarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule">alarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput">alarmCapabilitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput">alarmEventActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput">alarmModelDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput">alarmModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput">alarmRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput">severityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription">alarmModelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName">alarmModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity">severity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarmCapabilities`<sup>Required</sup> <a name="alarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilities"></a>

```typescript
public readonly alarmCapabilities: IoteventsAlarmModelAlarmCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference">IoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `alarmEventActions`<sup>Required</sup> <a name="alarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActions"></a>

```typescript
public readonly alarmEventActions: IoteventsAlarmModelAlarmEventActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference">IoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRule"></a>

```typescript
public readonly alarmRule: IoteventsAlarmModelAlarmRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference">IoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tags"></a>

```typescript
public readonly tags: IoteventsAlarmModelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList">IoteventsAlarmModelTagsList</a>

---

##### `alarmCapabilitiesInput`<sup>Optional</sup> <a name="alarmCapabilitiesInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmCapabilitiesInput"></a>

```typescript
public readonly alarmCapabilitiesInput: IResolvable | IoteventsAlarmModelAlarmCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---

##### `alarmEventActionsInput`<sup>Optional</sup> <a name="alarmEventActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmEventActionsInput"></a>

```typescript
public readonly alarmEventActionsInput: IResolvable | IoteventsAlarmModelAlarmEventActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---

##### `alarmModelDescriptionInput`<sup>Optional</sup> <a name="alarmModelDescriptionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescriptionInput"></a>

```typescript
public readonly alarmModelDescriptionInput: string;
```

- *Type:* string

---

##### `alarmModelNameInput`<sup>Optional</sup> <a name="alarmModelNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelNameInput"></a>

```typescript
public readonly alarmModelNameInput: string;
```

- *Type:* string

---

##### `alarmRuleInput`<sup>Optional</sup> <a name="alarmRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmRuleInput"></a>

```typescript
public readonly alarmRuleInput: IResolvable | IoteventsAlarmModelAlarmRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severityInput"></a>

```typescript
public readonly severityInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IoteventsAlarmModelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---

##### `alarmModelDescription`<sup>Required</sup> <a name="alarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelDescription"></a>

```typescript
public readonly alarmModelDescription: string;
```

- *Type:* string

---

##### `alarmModelName`<sup>Required</sup> <a name="alarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.alarmModelName"></a>

```typescript
public readonly alarmModelName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.severity"></a>

```typescript
public readonly severity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelAlarmCapabilities <a name="IoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmCapabilities: ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow">acknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | Specifies whether to get notified for alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration">initializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. |

---

##### `acknowledgeFlow`<sup>Optional</sup> <a name="acknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.acknowledgeFlow"></a>

```typescript
public readonly acknowledgeFlow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

Specifies whether to get notified for alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#acknowledge_flow IoteventsAlarmModel#acknowledge_flow}

---

##### `initializationConfiguration`<sup>Optional</sup> <a name="initializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities.property.initializationConfiguration"></a>

```typescript
public readonly initializationConfiguration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#initialization_configuration IoteventsAlarmModel#initialization_configuration}

---

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow: ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If ``TRUE``, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to ``NORMAL``. If ``FALSE``, you won't receive notifications. The alarm automatically changes to the ``NORMAL`` state when the input property value returns to the specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#enabled IoteventsAlarmModel#enabled}

---

### IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmCapabilitiesInitializationConfiguration: ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization">disabledOnInitialization</a></code> | <code>boolean \| cdktn.IResolvable</code> | The value must be ``TRUE`` or ``FALSE``. |

---

##### `disabledOnInitialization`<sup>Optional</sup> <a name="disabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.property.disabledOnInitialization"></a>

```typescript
public readonly disabledOnInitialization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The value must be ``TRUE`` or ``FALSE``.

If ``FALSE``, all alarm instances created based on the alarm model are activated. The default value is ``TRUE``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#disabled_on_initialization IoteventsAlarmModel#disabled_on_initialization}

---

### IoteventsAlarmModelAlarmEventActions <a name="IoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActions: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions">alarmActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | Specifies one or more supported actions to receive notifications when the alarm state changes. |

---

##### `alarmActions`<sup>Optional</sup> <a name="alarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions.property.alarmActions"></a>

```typescript
public readonly alarmActions: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

Specifies one or more supported actions to receive notifications when the alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_actions IoteventsAlarmModel#alarm_actions}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActions <a name="IoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActions: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2">dynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | Defines an action to write to the Amazon DynamoDB table that you created. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | Sends an ITE input, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise">iotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish">iotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | Information required to publish the MQTT message through the IoT message broker. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | Information required to publish the Amazon SNS message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. |

---

##### `dynamoDb`<sup>Optional</sup> <a name="dynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDb"></a>

```typescript
public readonly dynamoDb: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBAction``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``hashKeyType`` parameter can be ``'STRING'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``hashKeyField`` parameter can be ``$input.GreenhouseInput.name``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``hashKeyValue`` parameter uses a substitution template. 
  ``'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`` 
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 If the defined payload type is a string, ``DynamoDBAction`` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the ``payloadField`` parameter is ``<payload-field>_raw``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#dynamo_db IoteventsAlarmModel#dynamo_db}

---

##### `dynamoDBv2`<sup>Optional</sup> <a name="dynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.dynamoDBv2"></a>

```typescript
public readonly dynamoDBv2: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

Defines an action to write to the Amazon DynamoDB table that you created.

The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBv2Action``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``tableName`` parameter can be ``'GreenhouseTemperatureTable'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``tableName`` parameter can be ``$variable.ddbtableName``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``contentExpression`` parameter in ``Payload`` uses a substitution template. 
  ``'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`` 
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 The value for the ``type`` parameter in ``Payload`` must be ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 IoteventsAlarmModel#dynamo_d_bv_2}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.firehose"></a>

```typescript
public readonly firehose: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#firehose IoteventsAlarmModel#firehose}

---

##### `iotEvents`<sup>Optional</sup> <a name="iotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotEvents"></a>

```typescript
public readonly iotEvents: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#iot_events IoteventsAlarmModel#iot_events}

---

##### `iotSiteWise`<sup>Optional</sup> <a name="iotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotSiteWise"></a>

```typescript
public readonly iotSiteWise: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.

You must use expressions for all parameters in ``IotSiteWiseAction``. The expressions accept literals, operators, functions, references, and substitutions templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``propertyAlias`` parameter can be ``'/company/windfarm/3/turbine/7/temperature'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``assetId`` parameter can be ``$input.TurbineInput.assetId1``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``propertyAlias`` parameter uses a substitution template. 
  ``'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`` 
  
 You must specify either ``propertyAlias`` or both ``assetId`` and ``propertyId`` to identify the target asset property in ITSW.
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#iot_site_wise IoteventsAlarmModel#iot_site_wise}

---

##### `iotTopicPublish`<sup>Optional</sup> <a name="iotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.iotTopicPublish"></a>

```typescript
public readonly iotTopicPublish: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

Information required to publish the MQTT message through the IoT message broker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#iot_topic_publish IoteventsAlarmModel#iot_topic_publish}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.lambda"></a>

```typescript
public readonly lambda: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#lambda IoteventsAlarmModel#lambda}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sns"></a>

```typescript
public readonly sns: IoteventsAlarmModelAlarmEventActionsAlarmActionsSns;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

Information required to publish the Amazon SNS message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#sns IoteventsAlarmModel#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions.property.sqs"></a>

```typescript
public readonly sqs: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#sqs IoteventsAlarmModel#sqs}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | The name of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | The data type for the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | The value of the hash key (also called the partition key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation">operation</a></code> | <code>string</code> | The type of operation to perform. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField">payloadField</a></code> | <code>string</code> | The name of the DynamoDB column that receives the action payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | The name of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | The value of the range key (also called the sort key). |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName">tableName</a></code> | <code>string</code> | The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table. |

---

##### `hashKeyField`<sup>Optional</sup> <a name="hashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

The name of the hash key (also called the partition key).

The ``hashKeyField`` value must match the partition key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#hash_key_field IoteventsAlarmModel#hash_key_field}

---

##### `hashKeyType`<sup>Optional</sup> <a name="hashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

The data type for the hash key (also called the partition key).

You can specify the following values:
  +  ``'STRING'`` - The hash key is a string.
  +  ``'NUMBER'`` - The hash key is a number.
  
 If you don't specify ``hashKeyType``, the default value is ``'STRING'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#hash_key_type IoteventsAlarmModel#hash_key_type}

---

##### `hashKeyValue`<sup>Optional</sup> <a name="hashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

The value of the hash key (also called the partition key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#hash_key_value IoteventsAlarmModel#hash_key_value}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The type of operation to perform.

You can specify the following values: 
  +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  
 If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#operation IoteventsAlarmModel#operation}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `payloadField`<sup>Optional</sup> <a name="payloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is ``payload``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload_field IoteventsAlarmModel#payload_field}

---

##### `rangeKeyField`<sup>Optional</sup> <a name="rangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

The name of the range key (also called the sort key).

The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#range_key_field IoteventsAlarmModel#range_key_field}

---

##### `rangeKeyType`<sup>Optional</sup> <a name="rangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

The data type for the range key (also called the sort key), You can specify the following values:   +  ``'STRING'`` - The range key is a string.

+  ``'NUMBER'`` - The range key is number.
  
 If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#range_key_type IoteventsAlarmModel#range_key_type}

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="rangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

The value of the range key (also called the sort key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#range_key_value IoteventsAlarmModel#range_key_value}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | Information needed to configure the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName">tableName</a></code> | <code>string</code> | The name of the DynamoDB table. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

Information needed to configure the payload.

By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the DynamoDB table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#table_name IoteventsAlarmModel#table_name}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsFirehose: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | The name of the Kinesis Data Firehose delivery stream where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator">separator</a></code> | <code>string</code> | A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. |

---

##### `deliveryStreamName`<sup>Optional</sup> <a name="deliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

The name of the Kinesis Data Firehose delivery stream where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#delivery_stream_name IoteventsAlarmModel#delivery_stream_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream.

Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#separator IoteventsAlarmModel#separator}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName">inputName</a></code> | <code>string</code> | The name of the ITE input where the data is sent. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | You can configure the action payload when you send a message to an ITE input. |

---

##### `inputName`<sup>Optional</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

The name of the ITE input where the data is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#input_name IoteventsAlarmModel#input_name}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

You can configure the action payload when you send a message to an ITE input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId">assetId</a></code> | <code>string</code> | The ID of the asset that has the specified property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId">entryId</a></code> | <code>string</code> | A unique identifier for this entry. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias">propertyAlias</a></code> | <code>string</code> | The alias of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId">propertyId</a></code> | <code>string</code> | The ID of the asset property. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue">propertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information. |

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The ID of the asset that has the specified property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#asset_id IoteventsAlarmModel#asset_id}

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

A unique identifier for this entry.

You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#entry_id IoteventsAlarmModel#entry_id}

---

##### `propertyAlias`<sup>Optional</sup> <a name="propertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyAlias"></a>

```typescript
public readonly propertyAlias: string;
```

- *Type:* string

The alias of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#property_alias IoteventsAlarmModel#property_alias}

---

##### `propertyId`<sup>Optional</sup> <a name="propertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

The ID of the asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#property_id IoteventsAlarmModel#property_id}

---

##### `propertyValue`<sup>Optional</sup> <a name="propertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.property.propertyValue"></a>

```typescript
public readonly propertyValue: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#property_value IoteventsAlarmModel#property_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality">quality</a></code> | <code>string</code> | The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | The timestamp associated with the asset property value. The default is the current event time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | The value to send to an asset property. |

---

##### `quality`<sup>Optional</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.quality"></a>

```typescript
public readonly quality: string;
```

- *Type:* string

The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#quality IoteventsAlarmModel#quality}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.timestamp"></a>

```typescript
public readonly timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

The timestamp associated with the asset property value. The default is the current event time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#timestamp IoteventsAlarmModel#timestamp}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.property.value"></a>

```typescript
public readonly value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

The value to send to an asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos">offsetInNanos</a></code> | <code>string</code> | The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds">timeInSeconds</a></code> | <code>string</code> | The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199. |

---

##### `offsetInNanos`<sup>Optional</sup> <a name="offsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.offsetInNanos"></a>

```typescript
public readonly offsetInNanos: string;
```

- *Type:* string

The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#offset_in_nanos IoteventsAlarmModel#offset_in_nanos}

---

##### `timeInSeconds`<sup>Optional</sup> <a name="timeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.property.timeInSeconds"></a>

```typescript
public readonly timeInSeconds: string;
```

- *Type:* string

The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#time_in_seconds IoteventsAlarmModel#time_in_seconds}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue">booleanValue</a></code> | <code>string</code> | The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue">doubleValue</a></code> | <code>string</code> | The asset property value is a double. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue">integerValue</a></code> | <code>string</code> | The asset property value is an integer. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue">stringValue</a></code> | <code>string</code> | The asset property value is a string. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.booleanValue"></a>

```typescript
public readonly booleanValue: string;
```

- *Type:* string

The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``.

You must use an expression, and the evaluated result should be a Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#boolean_value IoteventsAlarmModel#boolean_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: string;
```

- *Type:* string

The asset property value is a double.

You must use an expression, and the evaluated result should be a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#double_value IoteventsAlarmModel#double_value}

---

##### `integerValue`<sup>Optional</sup> <a name="integerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.integerValue"></a>

```typescript
public readonly integerValue: string;
```

- *Type:* string

The asset property value is an integer.

You must use an expression, and the evaluated result should be an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#integer_value IoteventsAlarmModel#integer_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

The asset property value is a string.

You must use an expression, and the evaluated result should be a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#string_value IoteventsAlarmModel#string_value}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic">mqttTopic</a></code> | <code>string</code> | The MQTT topic of the message. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | You can configure the action payload when you publish a message to an IoTCore topic. |

---

##### `mqttTopic`<sup>Optional</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.mqttTopic"></a>

```typescript
public readonly mqttTopic: string;
```

- *Type:* string

The MQTT topic of the message.

You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#mqtt_topic IoteventsAlarmModel#mqtt_topic}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

You can configure the action payload when you publish a message to an IoTCore topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsLambda: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn">functionArn</a></code> | <code>string</code> | The ARN of the Lambda function that is executed. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | You can configure the action payload when you send a message to a Lambda function. |

---

##### `functionArn`<sup>Optional</sup> <a name="functionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

The ARN of the Lambda function that is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#function_arn IoteventsAlarmModel#function_arn}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

You can configure the action payload when you send a message to a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsSns: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | You can configure the action payload when you send a message as an Amazon SNS push notification. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn">targetArn</a></code> | <code>string</code> | The ARN of the Amazon SNS target where the message is sent. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

You can configure the action payload when you send a message as an Amazon SNS push notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `targetArn`<sup>Optional</sup> <a name="targetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

The ARN of the Amazon SNS target where the message is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#target_arn IoteventsAlarmModel#target_arn}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsSqs: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | You can configure the action payload when you send a message to an Amazon SQS queue. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | The URL of the SQS queue where the data is written. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64">useBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

You can configure the action payload when you send a message to an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#payload IoteventsAlarmModel#payload}

---

##### `queueUrl`<sup>Optional</sup> <a name="queueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

The URL of the SQS queue where the data is written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#queue_url IoteventsAlarmModel#queue_url}

---

##### `useBase64`<sup>Optional</sup> <a name="useBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue.

Otherwise, set this to FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#use_base_64 IoteventsAlarmModel#use_base_64}

---

### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload: ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression">contentExpression</a></code> | <code>string</code> | The content of the payload. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type">type</a></code> | <code>string</code> | The value of the payload type can be either ``STRING`` or ``JSON``. |

---

##### `contentExpression`<sup>Optional</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

The content of the payload.

You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#content_expression IoteventsAlarmModel#content_expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The value of the payload type can be either ``STRING`` or ``JSON``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#type IoteventsAlarmModel#type}

---

### IoteventsAlarmModelAlarmRule <a name="IoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmRule: ioteventsAlarmModel.IoteventsAlarmModelAlarmRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule">simpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | A rule that compares an input property value to a threshold value with a comparison operator. |

---

##### `simpleRule`<sup>Optional</sup> <a name="simpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule.property.simpleRule"></a>

```typescript
public readonly simpleRule: IoteventsAlarmModelAlarmRuleSimpleRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

A rule that compares an input property value to a threshold value with a comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#simple_rule IoteventsAlarmModel#simple_rule}

---

### IoteventsAlarmModelAlarmRuleSimpleRule <a name="IoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelAlarmRuleSimpleRule: ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty">inputProperty</a></code> | <code>string</code> | The value on the left side of the comparison operator. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold">threshold</a></code> | <code>string</code> | The value on the right side of the comparison operator. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The comparison operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#comparison_operator IoteventsAlarmModel#comparison_operator}

---

##### `inputProperty`<sup>Optional</sup> <a name="inputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.inputProperty"></a>

```typescript
public readonly inputProperty: string;
```

- *Type:* string

The value on the left side of the comparison operator.

You can specify an ITE input attribute as an input property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#input_property IoteventsAlarmModel#input_property}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

The value on the right side of the comparison operator.

You can enter a number or specify an ITE input attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#threshold IoteventsAlarmModel#threshold}

---

### IoteventsAlarmModelConfig <a name="IoteventsAlarmModelConfig" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelConfig: ioteventsAlarmModel.IoteventsAlarmModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule">alarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | Defines when your alarm is invoked. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities">alarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | Contains the configuration information of alarm state changes. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions">alarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | Contains information about one or more alarm actions. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription">alarmModelDescription</a></code> | <code>string</code> | The description of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName">alarmModelName</a></code> | <code>string</code> | The name of the alarm model. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key">key</a></code> | <code>string</code> | An input attribute used as a key to create an alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity">severity</a></code> | <code>number</code> | A non-negative integer that reflects the severity level of the alarm. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | A list of key-value pairs that contain metadata for the alarm model. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarmRule`<sup>Required</sup> <a name="alarmRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmRule"></a>

```typescript
public readonly alarmRule: IoteventsAlarmModelAlarmRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

Defines when your alarm is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_rule IoteventsAlarmModel#alarm_rule}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources.

For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#role_arn IoteventsAlarmModel#role_arn}

---

##### `alarmCapabilities`<sup>Optional</sup> <a name="alarmCapabilities" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmCapabilities"></a>

```typescript
public readonly alarmCapabilities: IoteventsAlarmModelAlarmCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

Contains the configuration information of alarm state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_capabilities IoteventsAlarmModel#alarm_capabilities}

---

##### `alarmEventActions`<sup>Optional</sup> <a name="alarmEventActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmEventActions"></a>

```typescript
public readonly alarmEventActions: IoteventsAlarmModelAlarmEventActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

Contains information about one or more alarm actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_event_actions IoteventsAlarmModel#alarm_event_actions}

---

##### `alarmModelDescription`<sup>Optional</sup> <a name="alarmModelDescription" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelDescription"></a>

```typescript
public readonly alarmModelDescription: string;
```

- *Type:* string

The description of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_model_description IoteventsAlarmModel#alarm_model_description}

---

##### `alarmModelName`<sup>Optional</sup> <a name="alarmModelName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.alarmModelName"></a>

```typescript
public readonly alarmModelName: string;
```

- *Type:* string

The name of the alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#alarm_model_name IoteventsAlarmModel#alarm_model_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

An input attribute used as a key to create an alarm.

ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.severity"></a>

```typescript
public readonly severity: number;
```

- *Type:* number

A non-negative integer that reflects the severity level of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#severity IoteventsAlarmModel#severity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IoteventsAlarmModelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

A list of key-value pairs that contain metadata for the alarm model.

The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
 You can create up to 50 tags for one alarm model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#tags IoteventsAlarmModel#tags}

---

### IoteventsAlarmModelTags <a name="IoteventsAlarmModelTags" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

const ioteventsAlarmModelTags: ioteventsAlarmModel.IoteventsAlarmModelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#key IoteventsAlarmModel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotevents_alarm_model#value IoteventsAlarmModel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---


### IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization">resetDisabledOnInitialization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledOnInitialization` <a name="resetDisabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resetDisabledOnInitialization"></a>

```typescript
public resetDisabledOnInitialization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput">disabledOnInitializationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">disabledOnInitialization</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledOnInitializationInput`<sup>Optional</sup> <a name="disabledOnInitializationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitializationInput"></a>

```typescript
public readonly disabledOnInitializationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disabledOnInitialization`<sup>Required</sup> <a name="disabledOnInitialization" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```typescript
public readonly disabledOnInitialization: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---


### IoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="IoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow">putAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration">putInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow">resetAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration">resetInitializationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcknowledgeFlow` <a name="putAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow"></a>

```typescript
public putAcknowledgeFlow(value: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putAcknowledgeFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `putInitializationConfiguration` <a name="putInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration"></a>

```typescript
public putInitializationConfiguration(value: IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.putInitializationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `resetAcknowledgeFlow` <a name="resetAcknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetAcknowledgeFlow"></a>

```typescript
public resetAcknowledgeFlow(): void
```

##### `resetInitializationConfiguration` <a name="resetInitializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.resetInitializationConfiguration"></a>

```typescript
public resetInitializationConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">acknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">initializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput">acknowledgeFlowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput">initializationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acknowledgeFlow`<sup>Required</sup> <a name="acknowledgeFlow" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```typescript
public readonly acknowledgeFlow: IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `initializationConfiguration`<sup>Required</sup> <a name="initializationConfiguration" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```typescript
public readonly initializationConfiguration: IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">IoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `acknowledgeFlowInput`<sup>Optional</sup> <a name="acknowledgeFlowInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlowInput"></a>

```typescript
public readonly acknowledgeFlowInput: IResolvable | IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">IoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---

##### `initializationConfigurationInput`<sup>Optional</sup> <a name="initializationConfigurationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfigurationInput"></a>

```typescript
public readonly initializationConfigurationInput: IResolvable | IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">IoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmCapabilities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmCapabilities">IoteventsAlarmModelAlarmCapabilities</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField">resetHashKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType">resetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue">resetHashKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField">resetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField">resetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType">resetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue">resetRangeKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `resetHashKeyField` <a name="resetHashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyField"></a>

```typescript
public resetHashKeyField(): void
```

##### `resetHashKeyType` <a name="resetHashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyType"></a>

```typescript
public resetHashKeyType(): void
```

##### `resetHashKeyValue` <a name="resetHashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetHashKeyValue"></a>

```typescript
public resetHashKeyValue(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPayloadField` <a name="resetPayloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetPayloadField"></a>

```typescript
public resetPayloadField(): void
```

##### `resetRangeKeyField` <a name="resetRangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyField"></a>

```typescript
public resetRangeKeyField(): void
```

##### `resetRangeKeyType` <a name="resetRangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyType"></a>

```typescript
public resetRangeKeyType(): void
```

##### `resetRangeKeyValue` <a name="resetRangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetRangeKeyValue"></a>

```typescript
public resetRangeKeyValue(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput">hashKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput">hashKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput">hashKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput">payloadFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput">rangeKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput">rangeKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput">rangeKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">payloadField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `hashKeyFieldInput`<sup>Optional</sup> <a name="hashKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyFieldInput"></a>

```typescript
public readonly hashKeyFieldInput: string;
```

- *Type:* string

---

##### `hashKeyTypeInput`<sup>Optional</sup> <a name="hashKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyTypeInput"></a>

```typescript
public readonly hashKeyTypeInput: string;
```

- *Type:* string

---

##### `hashKeyValueInput`<sup>Optional</sup> <a name="hashKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValueInput"></a>

```typescript
public readonly hashKeyValueInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `payloadFieldInput`<sup>Optional</sup> <a name="payloadFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadFieldInput"></a>

```typescript
public readonly payloadFieldInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---

##### `rangeKeyFieldInput`<sup>Optional</sup> <a name="rangeKeyFieldInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyFieldInput"></a>

```typescript
public readonly rangeKeyFieldInput: string;
```

- *Type:* string

---

##### `rangeKeyTypeInput`<sup>Optional</sup> <a name="rangeKeyTypeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyTypeInput"></a>

```typescript
public readonly rangeKeyTypeInput: string;
```

- *Type:* string

---

##### `rangeKeyValueInput`<sup>Optional</sup> <a name="rangeKeyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValueInput"></a>

```typescript
public readonly rangeKeyValueInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

---

##### `hashKeyType`<sup>Required</sup> <a name="hashKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `payloadField`<sup>Required</sup> <a name="payloadField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

---

##### `rangeKeyField`<sup>Required</sup> <a name="rangeKeyField" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

---

##### `rangeKeyType`<sup>Required</sup> <a name="rangeKeyType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

---

##### `rangeKeyValue`<sup>Required</sup> <a name="rangeKeyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName">resetDeliveryStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `resetDeliveryStreamName` <a name="resetDeliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetDeliveryStreamName"></a>

```typescript
public resetDeliveryStreamName(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetSeparator` <a name="resetSeparator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resetSeparator"></a>

```typescript
public resetSeparator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput">deliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `deliveryStreamNameInput`<sup>Optional</sup> <a name="deliveryStreamNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```typescript
public readonly deliveryStreamNameInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName">resetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `resetInputName` <a name="resetInputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetInputName"></a>

```typescript
public resetInputName(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">inputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputNameInput"></a>

```typescript
public readonly inputNameInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue">putPropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId">resetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias">resetPropertyAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId">resetPropertyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue">resetPropertyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropertyValue` <a name="putPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue"></a>

```typescript
public putPropertyValue(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.putPropertyValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `resetAssetId` <a name="resetAssetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetAssetId"></a>

```typescript
public resetAssetId(): void
```

##### `resetEntryId` <a name="resetEntryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetEntryId"></a>

```typescript
public resetEntryId(): void
```

##### `resetPropertyAlias` <a name="resetPropertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyAlias"></a>

```typescript
public resetPropertyAlias(): void
```

##### `resetPropertyId` <a name="resetPropertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyId"></a>

```typescript
public resetPropertyId(): void
```

##### `resetPropertyValue` <a name="resetPropertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resetPropertyValue"></a>

```typescript
public resetPropertyValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">propertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput">assetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput">propertyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput">propertyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput">propertyValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">assetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">propertyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">propertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertyValue`<sup>Required</sup> <a name="propertyValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```typescript
public readonly propertyValue: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetIdInput"></a>

```typescript
public readonly assetIdInput: string;
```

- *Type:* string

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `propertyAliasInput`<sup>Optional</sup> <a name="propertyAliasInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAliasInput"></a>

```typescript
public readonly propertyAliasInput: string;
```

- *Type:* string

---

##### `propertyIdInput`<sup>Optional</sup> <a name="propertyIdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyIdInput"></a>

```typescript
public readonly propertyIdInput: string;
```

- *Type:* string

---

##### `propertyValueInput`<sup>Optional</sup> <a name="propertyValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValueInput"></a>

```typescript
public readonly propertyValueInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

##### `propertyAlias`<sup>Required</sup> <a name="propertyAlias" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```typescript
public readonly propertyAlias: string;
```

- *Type:* string

---

##### `propertyId`<sup>Required</sup> <a name="propertyId" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```typescript
public readonly propertyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp">putTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality">resetQuality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimestamp` <a name="putTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp"></a>

```typescript
public putTimestamp(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putTimestamp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue"></a>

```typescript
public putValue(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `resetQuality` <a name="resetQuality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetQuality"></a>

```typescript
public resetQuality(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput">qualityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput">timestampInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">quality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```typescript
public readonly value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `qualityInput`<sup>Optional</sup> <a name="qualityInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.qualityInput"></a>

```typescript
public readonly qualityInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```typescript
public readonly quality: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos">resetOffsetInNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds">resetTimeInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffsetInNanos` <a name="resetOffsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetOffsetInNanos"></a>

```typescript
public resetOffsetInNanos(): void
```

##### `resetTimeInSeconds` <a name="resetTimeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resetTimeInSeconds"></a>

```typescript
public resetTimeInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput">offsetInNanosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput">timeInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">offsetInNanos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">timeInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInNanosInput`<sup>Optional</sup> <a name="offsetInNanosInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanosInput"></a>

```typescript
public readonly offsetInNanosInput: string;
```

- *Type:* string

---

##### `timeInSecondsInput`<sup>Optional</sup> <a name="timeInSecondsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSecondsInput"></a>

```typescript
public readonly timeInSecondsInput: string;
```

- *Type:* string

---

##### `offsetInNanos`<sup>Required</sup> <a name="offsetInNanos" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```typescript
public readonly offsetInNanos: string;
```

- *Type:* string

---

##### `timeInSeconds`<sup>Required</sup> <a name="timeInSeconds" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```typescript
public readonly timeInSeconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue">resetIntegerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetIntegerValue` <a name="resetIntegerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetIntegerValue"></a>

```typescript
public resetIntegerValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput">integerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">booleanValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">integerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: string;
```

- *Type:* string

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: string;
```

- *Type:* string

---

##### `integerValueInput`<sup>Optional</sup> <a name="integerValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValueInput"></a>

```typescript
public readonly integerValueInput: string;
```

- *Type:* string

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: string;
```

- *Type:* string

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: string;
```

- *Type:* string

---

##### `integerValue`<sup>Required</sup> <a name="integerValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```typescript
public readonly integerValue: string;
```

- *Type:* string

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic">resetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `resetMqttTopic` <a name="resetMqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetMqttTopic"></a>

```typescript
public resetMqttTopic(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput">mqttTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">mqttTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `mqttTopicInput`<sup>Optional</sup> <a name="mqttTopicInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopicInput"></a>

```typescript
public readonly mqttTopicInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---

##### `mqttTopic`<sup>Required</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```typescript
public readonly mqttTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn">resetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `resetFunctionArn` <a name="resetFunctionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetFunctionArn"></a>

```typescript
public resetFunctionArn(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```typescript
public get(index: number): IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb">putDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2">putDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents">putIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise">putIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish">putIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb">resetDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2">resetDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents">resetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise">resetIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish">resetIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs">resetSqs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamoDb` <a name="putDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb"></a>

```typescript
public putDynamoDb(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `putDynamoDBv2` <a name="putDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2"></a>

```typescript
public putDynamoDBv2(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putDynamoDBv2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `putIotEvents` <a name="putIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents"></a>

```typescript
public putIotEvents(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `putIotSiteWise` <a name="putIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise"></a>

```typescript
public putIotSiteWise(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotSiteWise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `putIotTopicPublish` <a name="putIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish"></a>

```typescript
public putIotTopicPublish(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putIotTopicPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda"></a>

```typescript
public putLambda(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `putSns` <a name="putSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns"></a>

```typescript
public putSns(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsSns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `putSqs` <a name="putSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs"></a>

```typescript
public putSqs(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `resetDynamoDb` <a name="resetDynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDb"></a>

```typescript
public resetDynamoDb(): void
```

##### `resetDynamoDBv2` <a name="resetDynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetDynamoDBv2"></a>

```typescript
public resetDynamoDBv2(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetIotEvents` <a name="resetIotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotEvents"></a>

```typescript
public resetIotEvents(): void
```

##### `resetIotSiteWise` <a name="resetIotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotSiteWise"></a>

```typescript
public resetIotSiteWise(): void
```

##### `resetIotTopicPublish` <a name="resetIotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetIotTopicPublish"></a>

```typescript
public resetIotTopicPublish(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```

##### `resetSns` <a name="resetSns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSns"></a>

```typescript
public resetSns(): void
```

##### `resetSqs` <a name="resetSqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resetSqs"></a>

```typescript
public resetSqs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">dynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">dynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">iotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">iotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">sqs</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput">dynamoDbInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input">dynamoDBv2Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput">iotEventsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput">iotSiteWiseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput">iotTopicPublishInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput">snsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput">sqsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamoDb`<sup>Required</sup> <a name="dynamoDb" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```typescript
public readonly dynamoDb: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `dynamoDBv2`<sup>Required</sup> <a name="dynamoDBv2" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```typescript
public readonly dynamoDBv2: IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```typescript
public readonly firehose: IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `iotEvents`<sup>Required</sup> <a name="iotEvents" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```typescript
public readonly iotEvents: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `iotSiteWise`<sup>Required</sup> <a name="iotSiteWise" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```typescript
public readonly iotSiteWise: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `iotTopicPublish`<sup>Required</sup> <a name="iotTopicPublish" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```typescript
public readonly iotTopicPublish: IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```typescript
public readonly lambda: IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```typescript
public readonly sns: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```typescript
public readonly sqs: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `dynamoDbInput`<sup>Optional</sup> <a name="dynamoDbInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDbInput"></a>

```typescript
public readonly dynamoDbInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---

##### `dynamoDBv2Input`<sup>Optional</sup> <a name="dynamoDBv2Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2Input"></a>

```typescript
public readonly dynamoDBv2Input: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">IoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">IoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---

##### `iotEventsInput`<sup>Optional</sup> <a name="iotEventsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEventsInput"></a>

```typescript
public readonly iotEventsInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---

##### `iotSiteWiseInput`<sup>Optional</sup> <a name="iotSiteWiseInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWiseInput"></a>

```typescript
public readonly iotSiteWiseInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---

##### `iotTopicPublishInput`<sup>Optional</sup> <a name="iotTopicPublishInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublishInput"></a>

```typescript
public readonly iotTopicPublishInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">IoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">IoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.snsInput"></a>

```typescript
public readonly snsInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqsInput"></a>

```typescript
public readonly sqsInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn">resetTargetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetTargetArn` <a name="resetTargetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resetTargetArn"></a>

```typescript
public resetTargetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSns">IoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload">putPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl">resetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64">resetUseBase64</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPayload` <a name="putPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload"></a>

```typescript
public putPayload(value: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.putPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetQueueUrl` <a name="resetQueueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetQueueUrl"></a>

```typescript
public resetQueueUrl(): void
```

##### `resetUseBase64` <a name="resetUseBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resetUseBase64"></a>

```typescript
public resetUseBase64(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput">payloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input">useBase64Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">useBase64</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```typescript
public readonly payload: IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `useBase64Input`<sup>Optional</sup> <a name="useBase64Input" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64Input"></a>

```typescript
public readonly useBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---


### IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression">resetContentExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentExpression` <a name="resetContentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetContentExpression"></a>

```typescript
public resetContentExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput">contentExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">contentExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentExpressionInput`<sup>Optional</sup> <a name="contentExpressionInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpressionInput"></a>

```typescript
public readonly contentExpressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentExpression`<sup>Required</sup> <a name="contentExpression" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```typescript
public readonly contentExpression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">IoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---


### IoteventsAlarmModelAlarmEventActionsOutputReference <a name="IoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions">putAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions">resetAlarmActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarmActions` <a name="putAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions"></a>

```typescript
public putAlarmActions(value: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.putAlarmActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---

##### `resetAlarmActions` <a name="resetAlarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.resetAlarmActions"></a>

```typescript
public resetAlarmActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">alarmActions</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput">alarmActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmActions`<sup>Required</sup> <a name="alarmActions" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```typescript
public readonly alarmActions: IoteventsAlarmModelAlarmEventActionsAlarmActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActionsList">IoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `alarmActionsInput`<sup>Optional</sup> <a name="alarmActionsInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActionsInput"></a>

```typescript
public readonly alarmActionsInput: IResolvable | IoteventsAlarmModelAlarmEventActionsAlarmActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsAlarmActions">IoteventsAlarmModelAlarmEventActionsAlarmActions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmEventActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmEventActions">IoteventsAlarmModelAlarmEventActions</a>

---


### IoteventsAlarmModelAlarmRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule">putSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule">resetSimpleRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleRule` <a name="putSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule"></a>

```typescript
public putSimpleRule(value: IoteventsAlarmModelAlarmRuleSimpleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.putSimpleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `resetSimpleRule` <a name="resetSimpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.resetSimpleRule"></a>

```typescript
public resetSimpleRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">simpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput">simpleRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleRule`<sup>Required</sup> <a name="simpleRule" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```typescript
public readonly simpleRule: IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `simpleRuleInput`<sup>Optional</sup> <a name="simpleRuleInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.simpleRuleInput"></a>

```typescript
public readonly simpleRuleInput: IResolvable | IoteventsAlarmModelAlarmRuleSimpleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRule">IoteventsAlarmModelAlarmRule</a>

---


### IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty">resetInputProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetInputProperty` <a name="resetInputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetInputProperty"></a>

```typescript
public resetInputProperty(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput">inputPropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">inputProperty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `inputPropertyInput`<sup>Optional</sup> <a name="inputPropertyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputPropertyInput"></a>

```typescript
public readonly inputPropertyInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `inputProperty`<sup>Required</sup> <a name="inputProperty" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```typescript
public readonly inputProperty: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelAlarmRuleSimpleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelAlarmRuleSimpleRule">IoteventsAlarmModelAlarmRuleSimpleRule</a>

---


### IoteventsAlarmModelTagsList <a name="IoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get"></a>

```typescript
public get(index: number): IoteventsAlarmModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>[]

---


### IoteventsAlarmModelTagsOutputReference <a name="IoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer"></a>

```typescript
import { ioteventsAlarmModel } from '@cdktn/provider-awscc'

new ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsAlarmModelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsAlarmModel.IoteventsAlarmModelTags">IoteventsAlarmModelTags</a>

---



