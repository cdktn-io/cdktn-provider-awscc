# `gameliftMatchmakingConfiguration` Submodule <a name="`gameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftMatchmakingConfiguration <a name="GameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration(scope: Construct, id: string, config: GameliftMatchmakingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig">GameliftMatchmakingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties">putGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds">resetAcceptanceTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount">resetAdditionalPlayerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode">resetBackfillMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData">resetCustomEventData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode">resetFlexMatchMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties">resetGameProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData">resetGameSessionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns">resetGameSessionQueueArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn">resetRuleSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGameProperties` <a name="putGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties"></a>

```typescript
public putGameProperties(value: IResolvable | GameliftMatchmakingConfigurationGameProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putGameProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | GameliftMatchmakingConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---

##### `resetAcceptanceTimeoutSeconds` <a name="resetAcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAcceptanceTimeoutSeconds"></a>

```typescript
public resetAcceptanceTimeoutSeconds(): void
```

##### `resetAdditionalPlayerCount` <a name="resetAdditionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetAdditionalPlayerCount"></a>

```typescript
public resetAdditionalPlayerCount(): void
```

##### `resetBackfillMode` <a name="resetBackfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetBackfillMode"></a>

```typescript
public resetBackfillMode(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetCustomEventData` <a name="resetCustomEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetCustomEventData"></a>

```typescript
public resetCustomEventData(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFlexMatchMode` <a name="resetFlexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetFlexMatchMode"></a>

```typescript
public resetFlexMatchMode(): void
```

##### `resetGameProperties` <a name="resetGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameProperties"></a>

```typescript
public resetGameProperties(): void
```

##### `resetGameSessionData` <a name="resetGameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionData"></a>

```typescript
public resetGameSessionData(): void
```

##### `resetGameSessionQueueArns` <a name="resetGameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetGameSessionQueueArns"></a>

```typescript
public resetGameSessionQueueArns(): void
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetNotificationTarget"></a>

```typescript
public resetNotificationTarget(): void
```

##### `resetRuleSetArn` <a name="resetRuleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetRuleSetArn"></a>

```typescript
public resetRuleSetArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftMatchmakingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties">gameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput">acceptanceRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput">acceptanceTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput">additionalPlayerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput">backfillModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput">creationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput">customEventDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput">flexMatchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput">gamePropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput">gameSessionDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput">gameSessionQueueArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput">notificationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput">requestTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput">ruleSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput">ruleSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired">acceptanceRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount">additionalPlayerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode">backfillMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData">customEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode">flexMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData">gameSessionData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn">ruleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `gameProperties`<sup>Required</sup> <a name="gameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameProperties"></a>

```typescript
public readonly gameProperties: GameliftMatchmakingConfigurationGamePropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList">GameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tags"></a>

```typescript
public readonly tags: GameliftMatchmakingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList">GameliftMatchmakingConfigurationTagsList</a>

---

##### `acceptanceRequiredInput`<sup>Optional</sup> <a name="acceptanceRequiredInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequiredInput"></a>

```typescript
public readonly acceptanceRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `acceptanceTimeoutSecondsInput`<sup>Optional</sup> <a name="acceptanceTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSecondsInput"></a>

```typescript
public readonly acceptanceTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `additionalPlayerCountInput`<sup>Optional</sup> <a name="additionalPlayerCountInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCountInput"></a>

```typescript
public readonly additionalPlayerCountInput: number;
```

- *Type:* number

---

##### `backfillModeInput`<sup>Optional</sup> <a name="backfillModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillModeInput"></a>

```typescript
public readonly backfillModeInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: string;
```

- *Type:* string

---

##### `customEventDataInput`<sup>Optional</sup> <a name="customEventDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventDataInput"></a>

```typescript
public readonly customEventDataInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `flexMatchModeInput`<sup>Optional</sup> <a name="flexMatchModeInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchModeInput"></a>

```typescript
public readonly flexMatchModeInput: string;
```

- *Type:* string

---

##### `gamePropertiesInput`<sup>Optional</sup> <a name="gamePropertiesInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gamePropertiesInput"></a>

```typescript
public readonly gamePropertiesInput: IResolvable | GameliftMatchmakingConfigurationGameProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---

##### `gameSessionDataInput`<sup>Optional</sup> <a name="gameSessionDataInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionDataInput"></a>

```typescript
public readonly gameSessionDataInput: string;
```

- *Type:* string

---

##### `gameSessionQueueArnsInput`<sup>Optional</sup> <a name="gameSessionQueueArnsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArnsInput"></a>

```typescript
public readonly gameSessionQueueArnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTargetInput"></a>

```typescript
public readonly notificationTargetInput: string;
```

- *Type:* string

---

##### `requestTimeoutSecondsInput`<sup>Optional</sup> <a name="requestTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSecondsInput"></a>

```typescript
public readonly requestTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `ruleSetArnInput`<sup>Optional</sup> <a name="ruleSetArnInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArnInput"></a>

```typescript
public readonly ruleSetArnInput: string;
```

- *Type:* string

---

##### `ruleSetNameInput`<sup>Optional</sup> <a name="ruleSetNameInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetNameInput"></a>

```typescript
public readonly ruleSetNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GameliftMatchmakingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `acceptanceTimeoutSeconds`<sup>Required</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```typescript
public readonly acceptanceTimeoutSeconds: number;
```

- *Type:* number

---

##### `additionalPlayerCount`<sup>Required</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```typescript
public readonly additionalPlayerCount: number;
```

- *Type:* number

---

##### `backfillMode`<sup>Required</sup> <a name="backfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.backfillMode"></a>

```typescript
public readonly backfillMode: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `customEventData`<sup>Required</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.customEventData"></a>

```typescript
public readonly customEventData: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `flexMatchMode`<sup>Required</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```typescript
public readonly flexMatchMode: string;
```

- *Type:* string

---

##### `gameSessionData`<sup>Required</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionData"></a>

```typescript
public readonly gameSessionData: string;
```

- *Type:* string

---

##### `gameSessionQueueArns`<sup>Required</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```typescript
public readonly gameSessionQueueArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```typescript
public readonly requestTimeoutSeconds: number;
```

- *Type:* number

---

##### `ruleSetArn`<sup>Required</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```typescript
public readonly ruleSetArn: string;
```

- *Type:* string

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftMatchmakingConfigurationConfig <a name="GameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const gameliftMatchmakingConfigurationConfig: gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired">acceptanceRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that indicates whether a match that was created with this configuration must be accepted by the matched players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds">requestTimeoutSeconds</a></code> | <code>number</code> | The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | A unique identifier for the matchmaking rule set to use with this configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds">acceptanceTimeoutSeconds</a></code> | <code>number</code> | The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount">additionalPlayerCount</a></code> | <code>number</code> | The number of player slots in a match to keep open for future players. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode">backfillMode</a></code> | <code>string</code> | The method used to backfill game sessions created with this matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime">creationTime</a></code> | <code>string</code> | A time stamp indicating when this data object was created. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData">customEventData</a></code> | <code>string</code> | Information to attach to all events related to the matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description">description</a></code> | <code>string</code> | A descriptive label that is associated with matchmaking configuration. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode">flexMatchMode</a></code> | <code>string</code> | Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties">gameProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | A set of custom properties for a game session, formatted as key:value pairs. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData">gameSessionData</a></code> | <code>string</code> | A set of custom game session properties, formatted as a single string value. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns">gameSessionQueueArns</a></code> | <code>string[]</code> | The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | An SNS topic ARN that is set up to receive matchmaking notifications. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn">ruleSetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acceptanceRequired`<sup>Required</sup> <a name="acceptanceRequired" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceRequired"></a>

```typescript
public readonly acceptanceRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that indicates whether a match that was created with this configuration must be accepted by the matched players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#acceptance_required GameliftMatchmakingConfiguration#acceptance_required}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#name GameliftMatchmakingConfiguration#name}

---

##### `requestTimeoutSeconds`<sup>Required</sup> <a name="requestTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.requestTimeoutSeconds"></a>

```typescript
public readonly requestTimeoutSeconds: number;
```

- *Type:* number

The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#request_timeout_seconds GameliftMatchmakingConfiguration#request_timeout_seconds}

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

A unique identifier for the matchmaking rule set to use with this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#rule_set_name GameliftMatchmakingConfiguration#rule_set_name}

---

##### `acceptanceTimeoutSeconds`<sup>Optional</sup> <a name="acceptanceTimeoutSeconds" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.acceptanceTimeoutSeconds"></a>

```typescript
public readonly acceptanceTimeoutSeconds: number;
```

- *Type:* number

The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#acceptance_timeout_seconds GameliftMatchmakingConfiguration#acceptance_timeout_seconds}

---

##### `additionalPlayerCount`<sup>Optional</sup> <a name="additionalPlayerCount" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.additionalPlayerCount"></a>

```typescript
public readonly additionalPlayerCount: number;
```

- *Type:* number

The number of player slots in a match to keep open for future players.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#additional_player_count GameliftMatchmakingConfiguration#additional_player_count}

---

##### `backfillMode`<sup>Optional</sup> <a name="backfillMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.backfillMode"></a>

```typescript
public readonly backfillMode: string;
```

- *Type:* string

The method used to backfill game sessions created with this matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#backfill_mode GameliftMatchmakingConfiguration#backfill_mode}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

A time stamp indicating when this data object was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#creation_time GameliftMatchmakingConfiguration#creation_time}

---

##### `customEventData`<sup>Optional</sup> <a name="customEventData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.customEventData"></a>

```typescript
public readonly customEventData: string;
```

- *Type:* string

Information to attach to all events related to the matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#custom_event_data GameliftMatchmakingConfiguration#custom_event_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive label that is associated with matchmaking configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#description GameliftMatchmakingConfiguration#description}

---

##### `flexMatchMode`<sup>Optional</sup> <a name="flexMatchMode" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.flexMatchMode"></a>

```typescript
public readonly flexMatchMode: string;
```

- *Type:* string

Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#flex_match_mode GameliftMatchmakingConfiguration#flex_match_mode}

---

##### `gameProperties`<sup>Optional</sup> <a name="gameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameProperties"></a>

```typescript
public readonly gameProperties: IResolvable | GameliftMatchmakingConfigurationGameProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

A set of custom properties for a game session, formatted as key:value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#game_properties GameliftMatchmakingConfiguration#game_properties}

---

##### `gameSessionData`<sup>Optional</sup> <a name="gameSessionData" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionData"></a>

```typescript
public readonly gameSessionData: string;
```

- *Type:* string

A set of custom game session properties, formatted as a single string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#game_session_data GameliftMatchmakingConfiguration#game_session_data}

---

##### `gameSessionQueueArns`<sup>Optional</sup> <a name="gameSessionQueueArns" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.gameSessionQueueArns"></a>

```typescript
public readonly gameSessionQueueArns: string[];
```

- *Type:* string[]

The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#game_session_queue_arns GameliftMatchmakingConfiguration#game_session_queue_arns}

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

An SNS topic ARN that is set up to receive matchmaking notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#notification_target GameliftMatchmakingConfiguration#notification_target}

---

##### `ruleSetArn`<sup>Optional</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.ruleSetArn"></a>

```typescript
public readonly ruleSetArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#rule_set_arn GameliftMatchmakingConfiguration#rule_set_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GameliftMatchmakingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#tags GameliftMatchmakingConfiguration#tags}

---

### GameliftMatchmakingConfigurationGameProperties <a name="GameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const gameliftMatchmakingConfigurationGameProperties: gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key">key</a></code> | <code>string</code> | The game property identifier. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value">value</a></code> | <code>string</code> | The game property value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The game property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The game property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

### GameliftMatchmakingConfigurationTags <a name="GameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

const gameliftMatchmakingConfigurationTags: gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#key GameliftMatchmakingConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/gamelift_matchmaking_configuration#value GameliftMatchmakingConfiguration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftMatchmakingConfigurationGamePropertiesList <a name="GameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```typescript
public get(index: number): GameliftMatchmakingConfigurationGamePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftMatchmakingConfigurationGameProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>[]

---


### GameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="GameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftMatchmakingConfigurationGameProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationGameProperties">GameliftMatchmakingConfigurationGameProperties</a>

---


### GameliftMatchmakingConfigurationTagsList <a name="GameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get"></a>

```typescript
public get(index: number): GameliftMatchmakingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftMatchmakingConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>[]

---


### GameliftMatchmakingConfigurationTagsOutputReference <a name="GameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { gameliftMatchmakingConfiguration } from '@cdktn/provider-awscc'

new gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftMatchmakingConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftMatchmakingConfiguration.GameliftMatchmakingConfigurationTags">GameliftMatchmakingConfigurationTags</a>

---



