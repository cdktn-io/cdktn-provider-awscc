# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktn/provider-awscc.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue awscc_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueue(scope: Construct, id: string, config: GameliftGameSessionQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies">putPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration">putPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData">resetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies">resetPlayerLatencyPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration">resetPriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | GameliftGameSessionQueueDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration"></a>

```typescript
public putFilterConfiguration(value: GameliftGameSessionQueueFilterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `putPlayerLatencyPolicies` <a name="putPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies"></a>

```typescript
public putPlayerLatencyPolicies(value: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---

##### `putPriorityConfiguration` <a name="putPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration"></a>

```typescript
public putPriorityConfiguration(value: GameliftGameSessionQueuePriorityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putPriorityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags"></a>

```typescript
public putTags(value: IResolvable | GameliftGameSessionQueueTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---

##### `resetCustomEventData` <a name="resetCustomEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetCustomEventData"></a>

```typescript
public resetCustomEventData(): void
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetFilterConfiguration"></a>

```typescript
public resetFilterConfiguration(): void
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```typescript
public resetNotificationTarget(): void
```

##### `resetPlayerLatencyPolicies` <a name="resetPlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicies"></a>

```typescript
public resetPlayerLatencyPolicies(): void
```

##### `resetPriorityConfiguration` <a name="resetPriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPriorityConfiguration"></a>

```typescript
public resetPriorityConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GameliftGameSessionQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftGameSessionQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftGameSessionQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftGameSessionQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies">playerLatencyPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration">priorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput">customEventDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">notificationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput">playerLatencyPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput">priorityConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData">customEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```typescript
public readonly destinations: GameliftGameSessionQueueDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList">GameliftGameSessionQueueDestinationsList</a>

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: GameliftGameSessionQueueFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference">GameliftGameSessionQueueFilterConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `playerLatencyPolicies`<sup>Required</sup> <a name="playerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicies"></a>

```typescript
public readonly playerLatencyPolicies: GameliftGameSessionQueuePlayerLatencyPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList">GameliftGameSessionQueuePlayerLatencyPoliciesList</a>

---

##### `priorityConfiguration`<sup>Required</sup> <a name="priorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfiguration"></a>

```typescript
public readonly priorityConfiguration: GameliftGameSessionQueuePriorityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference">GameliftGameSessionQueuePriorityConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```typescript
public readonly tags: GameliftGameSessionQueueTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList">GameliftGameSessionQueueTagsList</a>

---

##### `customEventDataInput`<sup>Optional</sup> <a name="customEventDataInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventDataInput"></a>

```typescript
public readonly customEventDataInput: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | GameliftGameSessionQueueDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.filterConfigurationInput"></a>

```typescript
public readonly filterConfigurationInput: IResolvable | GameliftGameSessionQueueFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```typescript
public readonly notificationTargetInput: string;
```

- *Type:* string

---

##### `playerLatencyPoliciesInput`<sup>Optional</sup> <a name="playerLatencyPoliciesInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPoliciesInput"></a>

```typescript
public readonly playerLatencyPoliciesInput: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---

##### `priorityConfigurationInput`<sup>Optional</sup> <a name="priorityConfigurationInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.priorityConfigurationInput"></a>

```typescript
public readonly priorityConfigurationInput: IResolvable | GameliftGameSessionQueuePriorityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GameliftGameSessionQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `customEventData`<sup>Required</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.customEventData"></a>

```typescript
public readonly customEventData: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueueConfig: gameliftGameSessionQueue.GameliftGameSessionQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">name</a></code> | <code>string</code> | A descriptive label that is associated with game session queue. Queue names must be unique within each Region. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData">customEventData</a></code> | <code>string</code> | Information that is added to all events that are related to this game session queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | A list of locations where a queue is allowed to place new game sessions. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | An SNS topic ARN that is set up to receive game session placement notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies">playerLatencyPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | A set of policies that act as a sliding cap on player latency. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration">priorityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | Custom settings to use when prioritizing destinations and locations for game session placements. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | The maximum time, in seconds, that a new game session placement request remains in the queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive label that is associated with game session queue. Queue names must be unique within each Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.customEventData"></a>

```typescript
public readonly customEventData: string;
```

- *Type:* string

Information that is added to all events that are related to this game session queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | GameliftGameSessionQueueDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: GameliftGameSessionQueueFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

A list of locations where a queue is allowed to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#filter_configuration GameliftGameSessionQueue#filter_configuration}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

An SNS topic ARN that is set up to receive game session placement notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}

---

##### `playerLatencyPolicies`<sup>Optional</sup> <a name="playerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicies"></a>

```typescript
public readonly playerLatencyPolicies: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

A set of policies that act as a sliding cap on player latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#player_latency_policies GameliftGameSessionQueue#player_latency_policies}

---

##### `priorityConfiguration`<sup>Optional</sup> <a name="priorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.priorityConfiguration"></a>

```typescript
public readonly priorityConfiguration: GameliftGameSessionQueuePriorityConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

Custom settings to use when prioritizing destinations and locations for game session placements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#priority_configuration GameliftGameSessionQueue#priority_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GameliftGameSessionQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

The maximum time, in seconds, that a new game session placement request remains in the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}

---

### GameliftGameSessionQueueDestinations <a name="GameliftGameSessionQueueDestinations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueueDestinations: gameliftGameSessionQueue.GameliftGameSessionQueueDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#destination_arn GameliftGameSessionQueue#destination_arn}.

---

### GameliftGameSessionQueueFilterConfiguration <a name="GameliftGameSessionQueueFilterConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueueFilterConfiguration: gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations">allowedLocations</a></code> | <code>string[]</code> | A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2. |

---

##### `allowedLocations`<sup>Optional</sup> <a name="allowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration.property.allowedLocations"></a>

```typescript
public readonly allowedLocations: string[];
```

- *Type:* string[]

A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#allowed_locations GameliftGameSessionQueue#allowed_locations}

---

### GameliftGameSessionQueuePlayerLatencyPolicies <a name="GameliftGameSessionQueuePlayerLatencyPolicies" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueuePlayerLatencyPolicies: gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>number</code> | The maximum latency value that is allowed for any player, in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>number</code> | The length of time, in seconds, that the policy is enforced while placing a new game session. |

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Optional</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMilliseconds: number;
```

- *Type:* number

The maximum latency value that is allowed for any player, in milliseconds.

All policies must have a value set for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}

---

##### `policyDurationSeconds`<sup>Optional</sup> <a name="policyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies.property.policyDurationSeconds"></a>

```typescript
public readonly policyDurationSeconds: number;
```

- *Type:* number

The length of time, in seconds, that the policy is enforced while placing a new game session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}

---

### GameliftGameSessionQueuePriorityConfiguration <a name="GameliftGameSessionQueuePriorityConfiguration" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueuePriorityConfiguration: gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder">locationOrder</a></code> | <code>string[]</code> | The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder">priorityOrder</a></code> | <code>string[]</code> | The recommended sequence to use when prioritizing where to place new game sessions. |

---

##### `locationOrder`<sup>Optional</sup> <a name="locationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.locationOrder"></a>

```typescript
public readonly locationOrder: string[];
```

- *Type:* string[]

The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#location_order GameliftGameSessionQueue#location_order}

---

##### `priorityOrder`<sup>Optional</sup> <a name="priorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration.property.priorityOrder"></a>

```typescript
public readonly priorityOrder: string[];
```

- *Type:* string[]

The recommended sequence to use when prioritizing where to place new game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#priority_order GameliftGameSessionQueue#priority_order}

---

### GameliftGameSessionQueueTags <a name="GameliftGameSessionQueueTags" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

const gameliftGameSessionQueueTags: gameliftGameSessionQueue.GameliftGameSessionQueueTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#key GameliftGameSessionQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_game_session_queue#value GameliftGameSessionQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueueDestinationsList <a name="GameliftGameSessionQueueDestinationsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get"></a>

```typescript
public get(index: number): GameliftGameSessionQueueDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueueDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>[]

---


### GameliftGameSessionQueueDestinationsOutputReference <a name="GameliftGameSessionQueueDestinationsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.resetDestinationArn"></a>

```typescript
public resetDestinationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueueDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueDestinations">GameliftGameSessionQueueDestinations</a>

---


### GameliftGameSessionQueueFilterConfigurationOutputReference <a name="GameliftGameSessionQueueFilterConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations">resetAllowedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedLocations` <a name="resetAllowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.resetAllowedLocations"></a>

```typescript
public resetAllowedLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput">allowedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations">allowedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedLocationsInput`<sup>Optional</sup> <a name="allowedLocationsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocationsInput"></a>

```typescript
public readonly allowedLocationsInput: string[];
```

- *Type:* string[]

---

##### `allowedLocations`<sup>Required</sup> <a name="allowedLocations" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.allowedLocations"></a>

```typescript
public readonly allowedLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueueFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueFilterConfiguration">GameliftGameSessionQueueFilterConfiguration</a>

---


### GameliftGameSessionQueuePlayerLatencyPoliciesList <a name="GameliftGameSessionQueuePlayerLatencyPoliciesList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get"></a>

```typescript
public get(index: number): GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>[]

---


### GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds">resetMaximumIndividualPlayerLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds">resetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumIndividualPlayerLatencyMilliseconds` <a name="resetMaximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetMaximumIndividualPlayerLatencyMilliseconds"></a>

```typescript
public resetMaximumIndividualPlayerLatencyMilliseconds(): void
```

##### `resetPolicyDurationSeconds` <a name="resetPolicyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.resetPolicyDurationSeconds"></a>

```typescript
public resetPolicyDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">maximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput">policyDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="maximumIndividualPlayerLatencyMillisecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMillisecondsInput: number;
```

- *Type:* number

---

##### `policyDurationSecondsInput`<sup>Optional</sup> <a name="policyDurationSecondsInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSecondsInput"></a>

```typescript
public readonly policyDurationSecondsInput: number;
```

- *Type:* number

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMilliseconds: number;
```

- *Type:* number

---

##### `policyDurationSeconds`<sup>Required</sup> <a name="policyDurationSeconds" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.policyDurationSeconds"></a>

```typescript
public readonly policyDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicies">GameliftGameSessionQueuePlayerLatencyPolicies</a>

---


### GameliftGameSessionQueuePriorityConfigurationOutputReference <a name="GameliftGameSessionQueuePriorityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder">resetLocationOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder">resetPriorityOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocationOrder` <a name="resetLocationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetLocationOrder"></a>

```typescript
public resetLocationOrder(): void
```

##### `resetPriorityOrder` <a name="resetPriorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.resetPriorityOrder"></a>

```typescript
public resetPriorityOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput">locationOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput">priorityOrderInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder">locationOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder">priorityOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationOrderInput`<sup>Optional</sup> <a name="locationOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrderInput"></a>

```typescript
public readonly locationOrderInput: string[];
```

- *Type:* string[]

---

##### `priorityOrderInput`<sup>Optional</sup> <a name="priorityOrderInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrderInput"></a>

```typescript
public readonly priorityOrderInput: string[];
```

- *Type:* string[]

---

##### `locationOrder`<sup>Required</sup> <a name="locationOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.locationOrder"></a>

```typescript
public readonly locationOrder: string[];
```

- *Type:* string[]

---

##### `priorityOrder`<sup>Required</sup> <a name="priorityOrder" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.priorityOrder"></a>

```typescript
public readonly priorityOrder: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueuePriorityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueuePriorityConfiguration">GameliftGameSessionQueuePriorityConfiguration</a>

---


### GameliftGameSessionQueueTagsList <a name="GameliftGameSessionQueueTagsList" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueueTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get"></a>

```typescript
public get(index: number): GameliftGameSessionQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueueTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>[]

---


### GameliftGameSessionQueueTagsOutputReference <a name="GameliftGameSessionQueueTagsOutputReference" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktn/provider-awscc'

new gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueueTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftGameSessionQueue.GameliftGameSessionQueueTags">GameliftGameSessionQueueTags</a>

---



