# `gameliftContainerFleet` Submodule <a name="`gameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.gameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerFleet <a name="GameliftContainerFleet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleet(scope: Construct, id: string, config: GameliftContainerFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig">GameliftContainerFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig">GameliftContainerFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy">putGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange">putInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions">putInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType">resetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName">resetGameServerContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance">resetGameServerContainerGroupsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy">resetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange">resetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions">resetInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups">resetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy">resetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName">resetPerInstanceContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode">resetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration"></a>

```typescript
public putDeploymentConfiguration(value: GameliftContainerFleetDeploymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `putGameSessionCreationLimitPolicy` <a name="putGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy"></a>

```typescript
public putGameSessionCreationLimitPolicy(value: GameliftContainerFleetGameSessionCreationLimitPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `putInstanceConnectionPortRange` <a name="putInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange"></a>

```typescript
public putInstanceConnectionPortRange(value: GameliftContainerFleetInstanceConnectionPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `putInstanceInboundPermissions` <a name="putInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions"></a>

```typescript
public putInstanceInboundPermissions(value: IResolvable | GameliftContainerFleetInstanceInboundPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---

##### `putLocations` <a name="putLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations"></a>

```typescript
public putLocations(value: IResolvable | GameliftContainerFleetLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: GameliftContainerFleetLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies"></a>

```typescript
public putScalingPolicies(value: IResolvable | GameliftContainerFleetScalingPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags"></a>

```typescript
public putTags(value: IResolvable | GameliftContainerFleetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---

##### `resetBillingType` <a name="resetBillingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType"></a>

```typescript
public resetBillingType(): void
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration"></a>

```typescript
public resetDeploymentConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGameServerContainerGroupDefinitionName` <a name="resetGameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName"></a>

```typescript
public resetGameServerContainerGroupDefinitionName(): void
```

##### `resetGameServerContainerGroupsPerInstance` <a name="resetGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance"></a>

```typescript
public resetGameServerContainerGroupsPerInstance(): void
```

##### `resetGameSessionCreationLimitPolicy` <a name="resetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy"></a>

```typescript
public resetGameSessionCreationLimitPolicy(): void
```

##### `resetInstanceConnectionPortRange` <a name="resetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange"></a>

```typescript
public resetInstanceConnectionPortRange(): void
```

##### `resetInstanceInboundPermissions` <a name="resetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions"></a>

```typescript
public resetInstanceInboundPermissions(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetMetricGroups` <a name="resetMetricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups"></a>

```typescript
public resetMetricGroups(): void
```

##### `resetNewGameSessionProtectionPolicy` <a name="resetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy"></a>

```typescript
public resetNewGameSessionProtectionPolicy(): void
```

##### `resetPerInstanceContainerGroupDefinitionName` <a name="resetPerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName"></a>

```typescript
public resetPerInstanceContainerGroupDefinitionName(): void
```

##### `resetPlayerGatewayMode` <a name="resetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode"></a>

```typescript
public resetPlayerGatewayMode(): void
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies"></a>

```typescript
public resetScalingPolicies(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

gameliftContainerFleet.GameliftContainerFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

gameliftContainerFleet.GameliftContainerFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

gameliftContainerFleet.GameliftContainerFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftContainerFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails">deploymentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn">fleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">gameServerContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">maximumGameServerContainerGroupsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">perInstanceContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput">billingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput">fleetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput">gameServerContainerGroupDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput">gameServerContainerGroupsPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput">gameSessionCreationLimitPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput">instanceConnectionPortRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput">instanceInboundPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput">locationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput">logConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput">metricGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput">newGameSessionProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput">perInstanceContainerGroupDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput">playerGatewayModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType">billingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn">fleetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups">metricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode">playerGatewayMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: GameliftContainerFleetDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `deploymentDetails`<sup>Required</sup> <a name="deploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails"></a>

```typescript
public readonly deploymentDetails: GameliftContainerFleetDeploymentDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn"></a>

```typescript
public readonly fleetArn: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `gameServerContainerGroupDefinitionArn`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```typescript
public readonly gameServerContainerGroupDefinitionArn: string;
```

- *Type:* string

---

##### `gameSessionCreationLimitPolicy`<sup>Required</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```typescript
public readonly gameSessionCreationLimitPolicy: GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceConnectionPortRange`<sup>Required</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange"></a>

```typescript
public readonly instanceConnectionPortRange: GameliftContainerFleetInstanceConnectionPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `instanceInboundPermissions`<sup>Required</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions"></a>

```typescript
public readonly instanceInboundPermissions: GameliftContainerFleetInstanceInboundPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations"></a>

```typescript
public readonly locations: GameliftContainerFleetLocationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: GameliftContainerFleetLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `maximumGameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="maximumGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```typescript
public readonly maximumGameServerContainerGroupsPerInstance: number;
```

- *Type:* number

---

##### `perInstanceContainerGroupDefinitionArn`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionArn: string;
```

- *Type:* string

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: GameliftContainerFleetScalingPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags"></a>

```typescript
public readonly tags: GameliftContainerFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a>

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput"></a>

```typescript
public readonly billingTypeInput: string;
```

- *Type:* string

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput"></a>

```typescript
public readonly deploymentConfigurationInput: IResolvable | GameliftContainerFleetDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fleetRoleArnInput`<sup>Optional</sup> <a name="fleetRoleArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput"></a>

```typescript
public readonly fleetRoleArnInput: string;
```

- *Type:* string

---

##### `gameServerContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="gameServerContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput"></a>

```typescript
public readonly gameServerContainerGroupDefinitionNameInput: string;
```

- *Type:* string

---

##### `gameServerContainerGroupsPerInstanceInput`<sup>Optional</sup> <a name="gameServerContainerGroupsPerInstanceInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput"></a>

```typescript
public readonly gameServerContainerGroupsPerInstanceInput: number;
```

- *Type:* number

---

##### `gameSessionCreationLimitPolicyInput`<sup>Optional</sup> <a name="gameSessionCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput"></a>

```typescript
public readonly gameSessionCreationLimitPolicyInput: IResolvable | GameliftContainerFleetGameSessionCreationLimitPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `instanceConnectionPortRangeInput`<sup>Optional</sup> <a name="instanceConnectionPortRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput"></a>

```typescript
public readonly instanceConnectionPortRangeInput: IResolvable | GameliftContainerFleetInstanceConnectionPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `instanceInboundPermissionsInput`<sup>Optional</sup> <a name="instanceInboundPermissionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput"></a>

```typescript
public readonly instanceInboundPermissionsInput: IResolvable | GameliftContainerFleetInstanceInboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput"></a>

```typescript
public readonly locationsInput: IResolvable | GameliftContainerFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: IResolvable | GameliftContainerFleetLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `metricGroupsInput`<sup>Optional</sup> <a name="metricGroupsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput"></a>

```typescript
public readonly metricGroupsInput: string[];
```

- *Type:* string[]

---

##### `newGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="newGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput"></a>

```typescript
public readonly newGameSessionProtectionPolicyInput: string;
```

- *Type:* string

---

##### `perInstanceContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="perInstanceContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionNameInput: string;
```

- *Type:* string

---

##### `playerGatewayModeInput`<sup>Optional</sup> <a name="playerGatewayModeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput"></a>

```typescript
public readonly playerGatewayModeInput: string;
```

- *Type:* string

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput"></a>

```typescript
public readonly scalingPoliciesInput: IResolvable | GameliftContainerFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GameliftContainerFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn"></a>

```typescript
public readonly fleetRoleArn: string;
```

- *Type:* string

---

##### `gameServerContainerGroupDefinitionName`<sup>Required</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```typescript
public readonly gameServerContainerGroupDefinitionName: string;
```

- *Type:* string

---

##### `gameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```typescript
public readonly gameServerContainerGroupsPerInstance: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `metricGroups`<sup>Required</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups"></a>

```typescript
public readonly metricGroups: string[];
```

- *Type:* string[]

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```typescript
public readonly newGameSessionProtectionPolicy: string;
```

- *Type:* string

---

##### `perInstanceContainerGroupDefinitionName`<sup>Required</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionName: string;
```

- *Type:* string

---

##### `playerGatewayMode`<sup>Required</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode"></a>

```typescript
public readonly playerGatewayMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerFleetConfig <a name="GameliftContainerFleetConfig" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetConfig: gameliftContainerFleet.GameliftContainerFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn">fleetRoleArn</a></code> | <code>string</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType">billingType</a></code> | <code>string</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName">gameServerContainerGroupDefinitionName</a></code> | <code>string</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance">gameServerContainerGroupsPerInstance</a></code> | <code>number</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy">gameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange">instanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions">instanceInboundPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations">locations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups">metricGroups</a></code> | <code>string[]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>string</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName">perInstanceContainerGroupDefinitionName</a></code> | <code>string</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode">playerGatewayMode</a></code> | <code>string</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fleetRoleArn`<sup>Required</sup> <a name="fleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn"></a>

```typescript
public readonly fleetRoleArn: string;
```

- *Type:* string

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType"></a>

```typescript
public readonly billingType: string;
```

- *Type:* string

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: GameliftContainerFleetDeploymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `gameServerContainerGroupDefinitionName`<sup>Optional</sup> <a name="gameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName"></a>

```typescript
public readonly gameServerContainerGroupDefinitionName: string;
```

- *Type:* string

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `gameServerContainerGroupsPerInstance`<sup>Optional</sup> <a name="gameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance"></a>

```typescript
public readonly gameServerContainerGroupsPerInstance: number;
```

- *Type:* number

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `gameSessionCreationLimitPolicy`<sup>Optional</sup> <a name="gameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy"></a>

```typescript
public readonly gameSessionCreationLimitPolicy: GameliftContainerFleetGameSessionCreationLimitPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `instanceConnectionPortRange`<sup>Optional</sup> <a name="instanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange"></a>

```typescript
public readonly instanceConnectionPortRange: GameliftContainerFleetInstanceConnectionPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `instanceInboundPermissions`<sup>Optional</sup> <a name="instanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions"></a>

```typescript
public readonly instanceInboundPermissions: IResolvable | GameliftContainerFleetInstanceInboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations"></a>

```typescript
public readonly locations: IResolvable | GameliftContainerFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: GameliftContainerFleetLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups"></a>

```typescript
public readonly metricGroups: string[];
```

- *Type:* string[]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy"></a>

```typescript
public readonly newGameSessionProtectionPolicy: string;
```

- *Type:* string

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `perInstanceContainerGroupDefinitionName`<sup>Optional</sup> <a name="perInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName"></a>

```typescript
public readonly perInstanceContainerGroupDefinitionName: string;
```

- *Type:* string

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode"></a>

```typescript
public readonly playerGatewayMode: string;
```

- *Type:* string

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: IResolvable | GameliftContainerFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GameliftContainerFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

### GameliftContainerFleetDeploymentConfiguration <a name="GameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetDeploymentConfiguration: gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy">impairmentStrategy</a></code> | <code>string</code> | The strategy to apply in case of impairment; defaults to MAINTAIN. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage">minimumHealthyPercentage</a></code> | <code>number</code> | The minimum percentage of healthy required; defaults to 75. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy">protectionStrategy</a></code> | <code>string</code> | The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION. |

---

##### `impairmentStrategy`<sup>Optional</sup> <a name="impairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy"></a>

```typescript
public readonly impairmentStrategy: string;
```

- *Type:* string

The strategy to apply in case of impairment; defaults to MAINTAIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#impairment_strategy GameliftContainerFleet#impairment_strategy}

---

##### `minimumHealthyPercentage`<sup>Optional</sup> <a name="minimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage"></a>

```typescript
public readonly minimumHealthyPercentage: number;
```

- *Type:* number

The minimum percentage of healthy required; defaults to 75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#minimum_healthy_percentage GameliftContainerFleet#minimum_healthy_percentage}

---

##### `protectionStrategy`<sup>Optional</sup> <a name="protectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy"></a>

```typescript
public readonly protectionStrategy: string;
```

- *Type:* string

The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#protection_strategy GameliftContainerFleet#protection_strategy}

---

### GameliftContainerFleetDeploymentDetails <a name="GameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetDeploymentDetails: gameliftContainerFleet.GameliftContainerFleetDeploymentDetails = { ... }
```


### GameliftContainerFleetGameSessionCreationLimitPolicy <a name="GameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetGameSessionCreationLimitPolicy: gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>number</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>number</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `newGameSessionsPerCreator`<sup>Optional</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```typescript
public readonly newGameSessionsPerCreator: number;
```

- *Type:* number

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator GameliftContainerFleet#new_game_sessions_per_creator}

---

##### `policyPeriodInMinutes`<sup>Optional</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```typescript
public readonly policyPeriodInMinutes: number;
```

- *Type:* number

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#policy_period_in_minutes GameliftContainerFleet#policy_period_in_minutes}

---

### GameliftContainerFleetInstanceConnectionPortRange <a name="GameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetInstanceConnectionPortRange: gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort">fromPort</a></code> | <code>number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort">toPort</a></code> | <code>number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetInstanceInboundPermissions <a name="GameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetInstanceInboundPermissions: gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort">fromPort</a></code> | <code>number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange">ipRange</a></code> | <code>string</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol">protocol</a></code> | <code>string</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort">toPort</a></code> | <code>number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#ip_range GameliftContainerFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#protocol GameliftContainerFleet#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetLocations <a name="GameliftContainerFleetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetLocations: gameliftContainerFleet.GameliftContainerFleetLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>string</code> | The player gateway status for the location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions">stoppedActions</a></code> | <code>string[]</code> | A list of fleet actions that have been suspended in the fleet location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}.

---

##### `locationCapacity`<sup>Optional</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity"></a>

```typescript
public readonly locationCapacity: GameliftContainerFleetLocationsLocationCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#location_capacity GameliftContainerFleet#location_capacity}

---

##### `playerGatewayStatus`<sup>Optional</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus"></a>

```typescript
public readonly playerGatewayStatus: string;
```

- *Type:* string

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#player_gateway_status GameliftContainerFleet#player_gateway_status}

---

##### `stoppedActions`<sup>Optional</sup> <a name="stoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions"></a>

```typescript
public readonly stoppedActions: string[];
```

- *Type:* string[]

A list of fleet actions that have been suspended in the fleet location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#stopped_actions GameliftContainerFleet#stopped_actions}

---

### GameliftContainerFleetLocationsLocationCapacity <a name="GameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetLocationsLocationCapacity: gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize">maxSize</a></code> | <code>number</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize">minSize</a></code> | <code>number</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#desired_ec2_instances GameliftContainerFleet#desired_ec2_instances}

---

##### `managedCapacityConfiguration`<sup>Optional</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```typescript
public readonly managedCapacityConfiguration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#managed_capacity_configuration GameliftContainerFleet#managed_capacity_configuration}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

The maximum value that is allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#max_size GameliftContainerFleet#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

The minimum value allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#min_size GameliftContainerFleet#min_size}

---

### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration: gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>number</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>string</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```typescript
public readonly scaleInAfterInactivityMinutes: number;
```

- *Type:* number

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes GameliftContainerFleet#scale_in_after_inactivity_minutes}

---

##### `zeroCapacityStrategy`<sup>Optional</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```typescript
public readonly zeroCapacityStrategy: string;
```

- *Type:* string

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#zero_capacity_strategy GameliftContainerFleet#zero_capacity_strategy}

---

### GameliftContainerFleetLogConfiguration <a name="GameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetLogConfiguration: gameliftContainerFleet.GameliftContainerFleetLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination">logDestination</a></code> | <code>string</code> | Configures the service that provides logs. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The name of the S3 bucket to pull logs from if S3 is the LogDestination. |

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Configures the service that provides logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#log_destination GameliftContainerFleet#log_destination}

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#log_group_arn GameliftContainerFleet#log_group_arn}

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The name of the S3 bucket to pull logs from if S3 is the LogDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#s3_bucket_name GameliftContainerFleet#s3_bucket_name}

---

### GameliftContainerFleetScalingPolicies <a name="GameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetScalingPolicies: gameliftContainerFleet.GameliftContainerFleetScalingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName">metricName</a></code> | <code>string</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name">name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType">policyType</a></code> | <code>string</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>string</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold">threshold</a></code> | <code>number</code> | Metric value used to trigger a scaling event. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#comparison_operator GameliftContainerFleet#comparison_operator}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#evaluation_periods GameliftContainerFleet#evaluation_periods}

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

This is required for RuleBased and TargetBased policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#metric_name GameliftContainerFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#name GameliftContainerFleet#name}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#policy_type GameliftContainerFleet#policy_type}

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#scaling_adjustment GameliftContainerFleet#scaling_adjustment}

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType"></a>

```typescript
public readonly scalingAdjustmentType: string;
```

- *Type:* string

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#scaling_adjustment_type GameliftContainerFleet#scaling_adjustment_type}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: GameliftContainerFleetScalingPoliciesTargetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#target_configuration GameliftContainerFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#threshold GameliftContainerFleet#threshold}

---

### GameliftContainerFleetScalingPoliciesTargetConfiguration <a name="GameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetScalingPoliciesTargetConfiguration: gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Desired value to use with a target-based scaling policy. |

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#target_value GameliftContainerFleet#target_value}

---

### GameliftContainerFleetTags <a name="GameliftContainerFleetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

const gameliftContainerFleetTags: gameliftContainerFleet.GameliftContainerFleetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#key GameliftContainerFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/gamelift_container_fleet#value GameliftContainerFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerFleetDeploymentConfigurationOutputReference <a name="GameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy">resetImpairmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage">resetMinimumHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy">resetProtectionStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImpairmentStrategy` <a name="resetImpairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy"></a>

```typescript
public resetImpairmentStrategy(): void
```

##### `resetMinimumHealthyPercentage` <a name="resetMinimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage"></a>

```typescript
public resetMinimumHealthyPercentage(): void
```

##### `resetProtectionStrategy` <a name="resetProtectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy"></a>

```typescript
public resetProtectionStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput">impairmentStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput">minimumHealthyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput">protectionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">impairmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">minimumHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">protectionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impairmentStrategyInput`<sup>Optional</sup> <a name="impairmentStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput"></a>

```typescript
public readonly impairmentStrategyInput: string;
```

- *Type:* string

---

##### `minimumHealthyPercentageInput`<sup>Optional</sup> <a name="minimumHealthyPercentageInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput"></a>

```typescript
public readonly minimumHealthyPercentageInput: number;
```

- *Type:* number

---

##### `protectionStrategyInput`<sup>Optional</sup> <a name="protectionStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput"></a>

```typescript
public readonly protectionStrategyInput: string;
```

- *Type:* string

---

##### `impairmentStrategy`<sup>Required</sup> <a name="impairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```typescript
public readonly impairmentStrategy: string;
```

- *Type:* string

---

##### `minimumHealthyPercentage`<sup>Required</sup> <a name="minimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```typescript
public readonly minimumHealthyPercentage: number;
```

- *Type:* number

---

##### `protectionStrategy`<sup>Required</sup> <a name="protectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```typescript
public readonly protectionStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---


### GameliftContainerFleetDeploymentDetailsOutputReference <a name="GameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">latestDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestDeploymentId`<sup>Required</sup> <a name="latestDeploymentId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```typescript
public readonly latestDeploymentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftContainerFleetDeploymentDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a>

---


### GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">resetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">resetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewGameSessionsPerCreator` <a name="resetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```typescript
public resetNewGameSessionsPerCreator(): void
```

##### `resetPolicyPeriodInMinutes` <a name="resetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```typescript
public resetPolicyPeriodInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">newGameSessionsPerCreatorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policyPeriodInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="newGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```typescript
public readonly newGameSessionsPerCreatorInput: number;
```

- *Type:* number

---

##### `policyPeriodInMinutesInput`<sup>Optional</sup> <a name="policyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```typescript
public readonly policyPeriodInMinutesInput: number;
```

- *Type:* number

---

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```typescript
public readonly newGameSessionsPerCreator: number;
```

- *Type:* number

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```typescript
public readonly policyPeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetGameSessionCreationLimitPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### GameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="GameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetInstanceConnectionPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---


### GameliftContainerFleetInstanceInboundPermissionsList <a name="GameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```typescript
public get(index: number): GameliftContainerFleetInstanceInboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetInstanceInboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---


### GameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="GameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetInstanceInboundPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>

---


### GameliftContainerFleetLocationsList <a name="GameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get"></a>

```typescript
public get(index: number): GameliftContainerFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---


### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">resetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">resetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleInAfterInactivityMinutes` <a name="resetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```typescript
public resetScaleInAfterInactivityMinutes(): void
```

##### `resetZeroCapacityStrategy` <a name="resetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```typescript
public resetZeroCapacityStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scaleInAfterInactivityMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zeroCapacityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```typescript
public readonly scaleInAfterInactivityMinutesInput: number;
```

- *Type:* number

---

##### `zeroCapacityStrategyInput`<sup>Optional</sup> <a name="zeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```typescript
public readonly zeroCapacityStrategyInput: string;
```

- *Type:* string

---

##### `scaleInAfterInactivityMinutes`<sup>Required</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```typescript
public readonly scaleInAfterInactivityMinutes: number;
```

- *Type:* number

---

##### `zeroCapacityStrategy`<sup>Required</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```typescript
public readonly zeroCapacityStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftContainerFleetLocationsLocationCapacityOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">putManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">resetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedCapacityConfiguration` <a name="putManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```typescript
public putManagedCapacityConfiguration(value: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```typescript
public resetDesiredEc2Instances(): void
```

##### `resetManagedCapacityConfiguration` <a name="resetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```typescript
public resetManagedCapacityConfiguration(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```typescript
public resetMinSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managedCapacityConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedCapacityConfiguration`<sup>Required</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```typescript
public readonly managedCapacityConfiguration: GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```typescript
public readonly desiredEc2InstancesInput: number;
```

- *Type:* number

---

##### `managedCapacityConfigurationInput`<sup>Optional</sup> <a name="managedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```typescript
public readonly managedCapacityConfigurationInput: IResolvable | GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetLocationsLocationCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---


### GameliftContainerFleetLocationsOutputReference <a name="GameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity">putLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity">resetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus">resetPlayerGatewayStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions">resetStoppedActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationCapacity` <a name="putLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity"></a>

```typescript
public putLocationCapacity(value: GameliftContainerFleetLocationsLocationCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLocationCapacity` <a name="resetLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity"></a>

```typescript
public resetLocationCapacity(): void
```

##### `resetPlayerGatewayStatus` <a name="resetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```typescript
public resetPlayerGatewayStatus(): void
```

##### `resetStoppedActions` <a name="resetStoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions"></a>

```typescript
public resetStoppedActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput">locationCapacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput">playerGatewayStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput">stoppedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions">stoppedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationCapacity`<sup>Required</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```typescript
public readonly locationCapacity: GameliftContainerFleetLocationsLocationCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `locationCapacityInput`<sup>Optional</sup> <a name="locationCapacityInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput"></a>

```typescript
public readonly locationCapacityInput: IResolvable | GameliftContainerFleetLocationsLocationCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `playerGatewayStatusInput`<sup>Optional</sup> <a name="playerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```typescript
public readonly playerGatewayStatusInput: string;
```

- *Type:* string

---

##### `stoppedActionsInput`<sup>Optional</sup> <a name="stoppedActionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput"></a>

```typescript
public readonly stoppedActionsInput: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `playerGatewayStatus`<sup>Required</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```typescript
public readonly playerGatewayStatus: string;
```

- *Type:* string

---

##### `stoppedActions`<sup>Required</sup> <a name="stoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```typescript
public readonly stoppedActions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetLocations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>

---


### GameliftContainerFleetLogConfigurationOutputReference <a name="GameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination"></a>

```typescript
public resetLogDestination(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName"></a>

```typescript
public resetS3BucketName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetLogConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---


### GameliftContainerFleetScalingPoliciesList <a name="GameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get"></a>

```typescript
public get(index: number): GameliftContainerFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---


### GameliftContainerFleetScalingPoliciesOutputReference <a name="GameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment">resetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">resetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```typescript
public putTargetConfiguration(value: GameliftContainerFleetScalingPoliciesTargetConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetScalingAdjustment` <a name="resetScalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```typescript
public resetScalingAdjustment(): void
```

##### `resetScalingAdjustmentType` <a name="resetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```typescript
public resetScalingAdjustmentType(): void
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```typescript
public resetTargetConfiguration(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scalingAdjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```typescript
public readonly scalingAdjustmentInput: number;
```

- *Type:* number

---

##### `scalingAdjustmentTypeInput`<sup>Optional</sup> <a name="scalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```typescript
public readonly scalingAdjustmentTypeInput: string;
```

- *Type:* string

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```typescript
public readonly targetConfigurationInput: IResolvable | GameliftContainerFleetScalingPoliciesTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

##### `scalingAdjustmentType`<sup>Required</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```typescript
public readonly scalingAdjustmentType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetScalingPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>

---


### GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetScalingPoliciesTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftContainerFleetTagsList <a name="GameliftContainerFleetTagsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get"></a>

```typescript
public get(index: number): GameliftContainerFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---


### GameliftContainerFleetTagsOutputReference <a name="GameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer"></a>

```typescript
import { gameliftContainerFleet } from '@cdktn/provider-awscc'

new gameliftContainerFleet.GameliftContainerFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftContainerFleetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>

---



