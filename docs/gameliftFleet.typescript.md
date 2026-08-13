# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktn/provider-awscc.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet awscc_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleet(scope: Construct, id: string, config: GameliftFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration">putAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration">putCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions">putEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations">putLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration">putPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">putResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration">putRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies">putScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration">resetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity">resetApplyCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId">resetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration">resetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions">resetEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType">resetEc2InstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn">resetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider">resetInstanceRoleCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths">resetLogPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups">resetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">resetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId">resetPeerVpcAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId">resetPeerVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration">resetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode">resetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">resetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">resetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies">resetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId">resetScriptId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters">resetServerLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath">resetServerLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnywhereConfiguration` <a name="putAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration"></a>

```typescript
public putAnywhereConfiguration(value: GameliftFleetAnywhereConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `putCertificateConfiguration` <a name="putCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```typescript
public putCertificateConfiguration(value: GameliftFleetCertificateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `putEc2InboundPermissions` <a name="putEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions"></a>

```typescript
public putEc2InboundPermissions(value: IResolvable | GameliftFleetEc2InboundPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---

##### `putLocations` <a name="putLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations"></a>

```typescript
public putLocations(value: IResolvable | GameliftFleetLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---

##### `putPlayerGatewayConfiguration` <a name="putPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration"></a>

```typescript
public putPlayerGatewayConfiguration(value: GameliftFleetPlayerGatewayConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `putResourceCreationLimitPolicy` <a name="putResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```typescript
public putResourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `putRuntimeConfiguration` <a name="putRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```typescript
public putRuntimeConfiguration(value: GameliftFleetRuntimeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `putScalingPolicies` <a name="putScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies"></a>

```typescript
public putScalingPolicies(value: IResolvable | GameliftFleetScalingPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags"></a>

```typescript
public putTags(value: IResolvable | GameliftFleetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---

##### `resetAnywhereConfiguration` <a name="resetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration"></a>

```typescript
public resetAnywhereConfiguration(): void
```

##### `resetApplyCapacity` <a name="resetApplyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity"></a>

```typescript
public resetApplyCapacity(): void
```

##### `resetBuildId` <a name="resetBuildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId"></a>

```typescript
public resetBuildId(): void
```

##### `resetCertificateConfiguration` <a name="resetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```typescript
public resetCertificateConfiguration(): void
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances"></a>

```typescript
public resetDesiredEc2Instances(): void
```

##### `resetEc2InboundPermissions` <a name="resetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions"></a>

```typescript
public resetEc2InboundPermissions(): void
```

##### `resetEc2InstanceType` <a name="resetEc2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType"></a>

```typescript
public resetEc2InstanceType(): void
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType"></a>

```typescript
public resetFleetType(): void
```

##### `resetInstanceRoleArn` <a name="resetInstanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```typescript
public resetInstanceRoleArn(): void
```

##### `resetInstanceRoleCredentialsProvider` <a name="resetInstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider"></a>

```typescript
public resetInstanceRoleCredentialsProvider(): void
```

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetLogPaths` <a name="resetLogPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths"></a>

```typescript
public resetLogPaths(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMetricGroups` <a name="resetMetricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```typescript
public resetMetricGroups(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetNewGameSessionProtectionPolicy` <a name="resetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```typescript
public resetNewGameSessionProtectionPolicy(): void
```

##### `resetPeerVpcAwsAccountId` <a name="resetPeerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId"></a>

```typescript
public resetPeerVpcAwsAccountId(): void
```

##### `resetPeerVpcId` <a name="resetPeerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId"></a>

```typescript
public resetPeerVpcId(): void
```

##### `resetPlayerGatewayConfiguration` <a name="resetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration"></a>

```typescript
public resetPlayerGatewayConfiguration(): void
```

##### `resetPlayerGatewayMode` <a name="resetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode"></a>

```typescript
public resetPlayerGatewayMode(): void
```

##### `resetResourceCreationLimitPolicy` <a name="resetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```typescript
public resetResourceCreationLimitPolicy(): void
```

##### `resetRuntimeConfiguration` <a name="resetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```typescript
public resetRuntimeConfiguration(): void
```

##### `resetScalingPolicies` <a name="resetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies"></a>

```typescript
public resetScalingPolicies(): void
```

##### `resetScriptId` <a name="resetScriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId"></a>

```typescript
public resetScriptId(): void
```

##### `resetServerLaunchParameters` <a name="resetServerLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters"></a>

```typescript
public resetServerLaunchParameters(): void
```

##### `resetServerLaunchPath` <a name="resetServerLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath"></a>

```typescript
public resetServerLaunchPath(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

gameliftFleet.GameliftFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

gameliftFleet.GameliftFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

gameliftFleet.GameliftFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

gameliftFleet.GameliftFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration">anywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration">certificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions">ec2InboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn">fleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations">locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration">playerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">resourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration">runtimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies">scalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput">anywhereConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput">applyCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput">buildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">certificateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput">ec2InboundPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">ec2InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">instanceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput">instanceRoleCredentialsProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput">locationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput">logPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput">metricGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">newGameSessionProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput">peerVpcAwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput">playerGatewayConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput">playerGatewayModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">resourceCreationLimitPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">runtimeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput">scalingPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput">scriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput">serverLaunchParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput">serverLaunchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity">applyCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId">buildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType">ec2InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn">instanceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider">instanceRoleCredentialsProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths">logPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups">metricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId">peerVpcAwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode">playerGatewayMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId">scriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters">serverLaunchParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath">serverLaunchPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `anywhereConfiguration`<sup>Required</sup> <a name="anywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration"></a>

```typescript
public readonly anywhereConfiguration: GameliftFleetAnywhereConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a>

---

##### `certificateConfiguration`<sup>Required</sup> <a name="certificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```typescript
public readonly certificateConfiguration: GameliftFleetCertificateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `ec2InboundPermissions`<sup>Required</sup> <a name="ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions"></a>

```typescript
public readonly ec2InboundPermissions: GameliftFleetEc2InboundPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a>

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn"></a>

```typescript
public readonly fleetArn: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations"></a>

```typescript
public readonly locations: GameliftFleetLocationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a>

---

##### `playerGatewayConfiguration`<sup>Required</sup> <a name="playerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration"></a>

```typescript
public readonly playerGatewayConfiguration: GameliftFleetPlayerGatewayConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a>

---

##### `resourceCreationLimitPolicy`<sup>Required</sup> <a name="resourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```typescript
public readonly resourceCreationLimitPolicy: GameliftFleetResourceCreationLimitPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `runtimeConfiguration`<sup>Required</sup> <a name="runtimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```typescript
public readonly runtimeConfiguration: GameliftFleetRuntimeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `scalingPolicies`<sup>Required</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: GameliftFleetScalingPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags"></a>

```typescript
public readonly tags: GameliftFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a>

---

##### `anywhereConfigurationInput`<sup>Optional</sup> <a name="anywhereConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput"></a>

```typescript
public readonly anywhereConfigurationInput: IResolvable | GameliftFleetAnywhereConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `applyCapacityInput`<sup>Optional</sup> <a name="applyCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput"></a>

```typescript
public readonly applyCapacityInput: string;
```

- *Type:* string

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```typescript
public readonly buildIdInput: string;
```

- *Type:* string

---

##### `certificateConfigurationInput`<sup>Optional</sup> <a name="certificateConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```typescript
public readonly certificateConfigurationInput: IResolvable | GameliftFleetCertificateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput"></a>

```typescript
public readonly desiredEc2InstancesInput: number;
```

- *Type:* number

---

##### `ec2InboundPermissionsInput`<sup>Optional</sup> <a name="ec2InboundPermissionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput"></a>

```typescript
public readonly ec2InboundPermissionsInput: IResolvable | GameliftFleetEc2InboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---

##### `ec2InstanceTypeInput`<sup>Optional</sup> <a name="ec2InstanceTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```typescript
public readonly ec2InstanceTypeInput: string;
```

- *Type:* string

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```typescript
public readonly fleetTypeInput: string;
```

- *Type:* string

---

##### `instanceRoleArnInput`<sup>Optional</sup> <a name="instanceRoleArnInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```typescript
public readonly instanceRoleArnInput: string;
```

- *Type:* string

---

##### `instanceRoleCredentialsProviderInput`<sup>Optional</sup> <a name="instanceRoleCredentialsProviderInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput"></a>

```typescript
public readonly instanceRoleCredentialsProviderInput: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput"></a>

```typescript
public readonly locationsInput: IResolvable | GameliftFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---

##### `logPathsInput`<sup>Optional</sup> <a name="logPathsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput"></a>

```typescript
public readonly logPathsInput: string[];
```

- *Type:* string[]

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `metricGroupsInput`<sup>Optional</sup> <a name="metricGroupsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```typescript
public readonly metricGroupsInput: string[];
```

- *Type:* string[]

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `newGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="newGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```typescript
public readonly newGameSessionProtectionPolicyInput: string;
```

- *Type:* string

---

##### `peerVpcAwsAccountIdInput`<sup>Optional</sup> <a name="peerVpcAwsAccountIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput"></a>

```typescript
public readonly peerVpcAwsAccountIdInput: string;
```

- *Type:* string

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput"></a>

```typescript
public readonly peerVpcIdInput: string;
```

- *Type:* string

---

##### `playerGatewayConfigurationInput`<sup>Optional</sup> <a name="playerGatewayConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput"></a>

```typescript
public readonly playerGatewayConfigurationInput: IResolvable | GameliftFleetPlayerGatewayConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `playerGatewayModeInput`<sup>Optional</sup> <a name="playerGatewayModeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput"></a>

```typescript
public readonly playerGatewayModeInput: string;
```

- *Type:* string

---

##### `resourceCreationLimitPolicyInput`<sup>Optional</sup> <a name="resourceCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```typescript
public readonly resourceCreationLimitPolicyInput: IResolvable | GameliftFleetResourceCreationLimitPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `runtimeConfigurationInput`<sup>Optional</sup> <a name="runtimeConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```typescript
public readonly runtimeConfigurationInput: IResolvable | GameliftFleetRuntimeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `scalingPoliciesInput`<sup>Optional</sup> <a name="scalingPoliciesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput"></a>

```typescript
public readonly scalingPoliciesInput: IResolvable | GameliftFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```typescript
public readonly scriptIdInput: string;
```

- *Type:* string

---

##### `serverLaunchParametersInput`<sup>Optional</sup> <a name="serverLaunchParametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput"></a>

```typescript
public readonly serverLaunchParametersInput: string;
```

- *Type:* string

---

##### `serverLaunchPathInput`<sup>Optional</sup> <a name="serverLaunchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput"></a>

```typescript
public readonly serverLaunchPathInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GameliftFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---

##### `applyCapacity`<sup>Required</sup> <a name="applyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity"></a>

```typescript
public readonly applyCapacity: string;
```

- *Type:* string

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

---

##### `ec2InstanceType`<sup>Required</sup> <a name="ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```typescript
public readonly ec2InstanceType: string;
```

- *Type:* string

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `instanceRoleArn`<sup>Required</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```typescript
public readonly instanceRoleArn: string;
```

- *Type:* string

---

##### `instanceRoleCredentialsProvider`<sup>Required</sup> <a name="instanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider"></a>

```typescript
public readonly instanceRoleCredentialsProvider: string;
```

- *Type:* string

---

##### `logPaths`<sup>Required</sup> <a name="logPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths"></a>

```typescript
public readonly logPaths: string[];
```

- *Type:* string[]

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `metricGroups`<sup>Required</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```typescript
public readonly metricGroups: string[];
```

- *Type:* string[]

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `newGameSessionProtectionPolicy`<sup>Required</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```typescript
public readonly newGameSessionProtectionPolicy: string;
```

- *Type:* string

---

##### `peerVpcAwsAccountId`<sup>Required</sup> <a name="peerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId"></a>

```typescript
public readonly peerVpcAwsAccountId: string;
```

- *Type:* string

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

---

##### `playerGatewayMode`<sup>Required</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode"></a>

```typescript
public readonly playerGatewayMode: string;
```

- *Type:* string

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

---

##### `serverLaunchParameters`<sup>Required</sup> <a name="serverLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters"></a>

```typescript
public readonly serverLaunchParameters: string;
```

- *Type:* string

---

##### `serverLaunchPath`<sup>Required</sup> <a name="serverLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath"></a>

```typescript
public readonly serverLaunchPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetAnywhereConfiguration <a name="GameliftFleetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetAnywhereConfiguration: gameliftFleet.GameliftFleetAnywhereConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost">cost</a></code> | <code>string</code> | Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost. |

---

##### `cost`<sup>Optional</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost"></a>

```typescript
public readonly cost: string;
```

- *Type:* string

Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#cost GameliftFleet#cost}

---

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetCertificateConfiguration: gameliftFleet.GameliftFleetCertificateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">certificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `certificateType`<sup>Optional</sup> <a name="certificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetConfig: gameliftFleet.GameliftFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name">name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration">anywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity">applyCapacity</a></code> | <code>string</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId">buildId</a></code> | <code>string</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">certificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType">computeType</a></code> | <code>string</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions">ec2InboundPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">ec2InstanceType</a></code> | <code>string</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType">fleetType</a></code> | <code>string</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">instanceRoleArn</a></code> | <code>string</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider">instanceRoleCredentialsProvider</a></code> | <code>string</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations">locations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths">logPaths</a></code> | <code>string[]</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize">maxSize</a></code> | <code>number</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups">metricGroups</a></code> | <code>string[]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize">minSize</a></code> | <code>number</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">newGameSessionProtectionPolicy</a></code> | <code>string</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId">peerVpcAwsAccountId</a></code> | <code>string</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration">playerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode">playerGatewayMode</a></code> | <code>string</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">resourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">runtimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies">scalingPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId">scriptId</a></code> | <code>string</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters">serverLaunchParameters</a></code> | <code>string</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath">serverLaunchPath</a></code> | <code>string</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `anywhereConfiguration`<sup>Optional</sup> <a name="anywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration"></a>

```typescript
public readonly anywhereConfiguration: GameliftFleetAnywhereConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `applyCapacity`<sup>Optional</sup> <a name="applyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity"></a>

```typescript
public readonly applyCapacity: string;
```

- *Type:* string

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `buildId`<sup>Optional</sup> <a name="buildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `certificateConfiguration`<sup>Optional</sup> <a name="certificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```typescript
public readonly certificateConfiguration: GameliftFleetCertificateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ec2InboundPermissions`<sup>Optional</sup> <a name="ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions"></a>

```typescript
public readonly ec2InboundPermissions: IResolvable | GameliftFleetEc2InboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `ec2InstanceType`<sup>Optional</sup> <a name="ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```typescript
public readonly ec2InstanceType: string;
```

- *Type:* string

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```typescript
public readonly instanceRoleArn: string;
```

- *Type:* string

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `instanceRoleCredentialsProvider`<sup>Optional</sup> <a name="instanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider"></a>

```typescript
public readonly instanceRoleCredentialsProvider: string;
```

- *Type:* string

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations"></a>

```typescript
public readonly locations: IResolvable | GameliftFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `logPaths`<sup>Optional</sup> <a name="logPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths"></a>

```typescript
public readonly logPaths: string[];
```

- *Type:* string[]

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `metricGroups`<sup>Optional</sup> <a name="metricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```typescript
public readonly metricGroups: string[];
```

- *Type:* string[]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `newGameSessionProtectionPolicy`<sup>Optional</sup> <a name="newGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```typescript
public readonly newGameSessionProtectionPolicy: string;
```

- *Type:* string

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `peerVpcAwsAccountId`<sup>Optional</sup> <a name="peerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId"></a>

```typescript
public readonly peerVpcAwsAccountId: string;
```

- *Type:* string

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `peerVpcId`<sup>Optional</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `playerGatewayConfiguration`<sup>Optional</sup> <a name="playerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration"></a>

```typescript
public readonly playerGatewayConfiguration: GameliftFleetPlayerGatewayConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `playerGatewayMode`<sup>Optional</sup> <a name="playerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode"></a>

```typescript
public readonly playerGatewayMode: string;
```

- *Type:* string

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `resourceCreationLimitPolicy`<sup>Optional</sup> <a name="resourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```typescript
public readonly resourceCreationLimitPolicy: GameliftFleetResourceCreationLimitPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `runtimeConfiguration`<sup>Optional</sup> <a name="runtimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```typescript
public readonly runtimeConfiguration: GameliftFleetRuntimeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `scalingPolicies`<sup>Optional</sup> <a name="scalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies"></a>

```typescript
public readonly scalingPolicies: IResolvable | GameliftFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `serverLaunchParameters`<sup>Optional</sup> <a name="serverLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters"></a>

```typescript
public readonly serverLaunchParameters: string;
```

- *Type:* string

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `serverLaunchPath`<sup>Optional</sup> <a name="serverLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath"></a>

```typescript
public readonly serverLaunchPath: string;
```

- *Type:* string

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GameliftFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

### GameliftFleetEc2InboundPermissions <a name="GameliftFleetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetEc2InboundPermissions: gameliftFleet.GameliftFleetEc2InboundPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort">fromPort</a></code> | <code>number</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange">ipRange</a></code> | <code>string</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol">protocol</a></code> | <code>string</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort">toPort</a></code> | <code>number</code> | An ending value for a range of allowed port numbers. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}

---

### GameliftFleetLocations <a name="GameliftFleetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetLocations: gameliftFleet.GameliftFleetLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>string</code> | The player gateway status for the location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `locationCapacity`<sup>Optional</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity"></a>

```typescript
public readonly locationCapacity: GameliftFleetLocationsLocationCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#location_capacity GameliftFleet#location_capacity}

---

##### `playerGatewayStatus`<sup>Optional</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus"></a>

```typescript
public readonly playerGatewayStatus: string;
```

- *Type:* string

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#player_gateway_status GameliftFleet#player_gateway_status}

---

### GameliftFleetLocationsLocationCapacity <a name="GameliftFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetLocationsLocationCapacity: gameliftFleet.GameliftFleetLocationsLocationCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize">maxSize</a></code> | <code>number</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize">minSize</a></code> | <code>number</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `desiredEc2Instances`<sup>Optional</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `managedCapacityConfiguration`<sup>Optional</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```typescript
public readonly managedCapacityConfiguration: GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#managed_capacity_configuration GameliftFleet#managed_capacity_configuration}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

The maximum value that is allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

The minimum value allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

### GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetLocationsLocationCapacityManagedCapacityConfiguration: gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>number</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>string</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `scaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```typescript
public readonly scaleInAfterInactivityMinutes: number;
```

- *Type:* number

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes GameliftFleet#scale_in_after_inactivity_minutes}

---

##### `zeroCapacityStrategy`<sup>Optional</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```typescript
public readonly zeroCapacityStrategy: string;
```

- *Type:* string

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#zero_capacity_strategy GameliftFleet#zero_capacity_strategy}

---

### GameliftFleetPlayerGatewayConfiguration <a name="GameliftFleetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetPlayerGatewayConfiguration: gameliftFleet.GameliftFleetPlayerGatewayConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported">gameServerIpProtocolSupported</a></code> | <code>string</code> | The IP protocol supported by the game server. |

---

##### `gameServerIpProtocolSupported`<sup>Optional</sup> <a name="gameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported"></a>

```typescript
public readonly gameServerIpProtocolSupported: string;
```

- *Type:* string

The IP protocol supported by the game server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#game_server_ip_protocol_supported GameliftFleet#game_server_ip_protocol_supported}

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetResourceCreationLimitPolicy: gameliftFleet.GameliftFleetResourceCreationLimitPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>number</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>number</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `newGameSessionsPerCreator`<sup>Optional</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```typescript
public readonly newGameSessionsPerCreator: number;
```

- *Type:* number

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}

---

##### `policyPeriodInMinutes`<sup>Optional</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```typescript
public readonly policyPeriodInMinutes: number;
```

- *Type:* number

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetRuntimeConfiguration: gameliftFleet.GameliftFleetRuntimeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">gameSessionActivationTimeoutSeconds</a></code> | <code>number</code> | The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">maxConcurrentGameSessionActivations</a></code> | <code>number</code> | The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses">serverProcesses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | A collection of server process configurations that describe which server processes to run on each instance in a fleet. |

---

##### `gameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="gameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```typescript
public readonly gameSessionActivationTimeoutSeconds: number;
```

- *Type:* number

The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING.

If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}

---

##### `maxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="maxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```typescript
public readonly maxConcurrentGameSessionActivations: number;
```

- *Type:* number

The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously.

This setting limits the amount of instance resources that can be used for new game activations at any one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}

---

##### `serverProcesses`<sup>Optional</sup> <a name="serverProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses"></a>

```typescript
public readonly serverProcesses: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

A collection of server process configurations that describe which server processes to run on each instance in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#server_processes GameliftFleet#server_processes}

---

### GameliftFleetRuntimeConfigurationServerProcesses <a name="GameliftFleetRuntimeConfigurationServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetRuntimeConfigurationServerProcesses: gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions">concurrentExecutions</a></code> | <code>number</code> | The number of server processes that use this configuration to run concurrently on an instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath">launchPath</a></code> | <code>string</code> | The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters">parameters</a></code> | <code>string</code> | An optional list of parameters to pass to the server executable or Realtime script on launch. |

---

##### `concurrentExecutions`<sup>Optional</sup> <a name="concurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions"></a>

```typescript
public readonly concurrentExecutions: number;
```

- *Type:* number

The number of server processes that use this configuration to run concurrently on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}

---

##### `launchPath`<sup>Optional</sup> <a name="launchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath"></a>

```typescript
public readonly launchPath: string;
```

- *Type:* string

The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function.

Game builds and Realtime scripts are installed on instances at the root:

Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"

Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

An optional list of parameters to pass to the server executable or Realtime script on launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}

---

### GameliftFleetScalingPolicies <a name="GameliftFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetScalingPolicies: gameliftFleet.GameliftFleetScalingPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName">metricName</a></code> | <code>string</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name">name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType">policyType</a></code> | <code>string</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>string</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status">status</a></code> | <code>string</code> | Current status of the scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold">threshold</a></code> | <code>number</code> | Metric value used to trigger a scaling event. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus">updateStatus</a></code> | <code>string</code> | The current status of the fleet's scaling policies in a requested fleet location. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#comparison_operator GameliftFleet#comparison_operator}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#evaluation_periods GameliftFleet#evaluation_periods}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `metricName`<sup>Optional</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#metric_name GameliftFleet#metric_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#policy_type GameliftFleet#policy_type}

---

##### `scalingAdjustment`<sup>Optional</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#scaling_adjustment GameliftFleet#scaling_adjustment}

---

##### `scalingAdjustmentType`<sup>Optional</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType"></a>

```typescript
public readonly scalingAdjustmentType: string;
```

- *Type:* string

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#scaling_adjustment_type GameliftFleet#scaling_adjustment_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Current status of the scaling policy.

The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#status GameliftFleet#status}

---

##### `targetConfiguration`<sup>Optional</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: GameliftFleetScalingPoliciesTargetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#target_configuration GameliftFleet#target_configuration}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#threshold GameliftFleet#threshold}

---

##### `updateStatus`<sup>Optional</sup> <a name="updateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus"></a>

```typescript
public readonly updateStatus: string;
```

- *Type:* string

The current status of the fleet's scaling policies in a requested fleet location.

The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#update_status GameliftFleet#update_status}

---

### GameliftFleetScalingPoliciesTargetConfiguration <a name="GameliftFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetScalingPoliciesTargetConfiguration: gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue">targetValue</a></code> | <code>number</code> | Desired value to use with a target-based scaling policy. |

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#target_value GameliftFleet#target_value}

---

### GameliftFleetTags <a name="GameliftFleetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

const gameliftFleetTags: gameliftFleet.GameliftFleetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#key GameliftFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_fleet#value GameliftFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetAnywhereConfigurationOutputReference <a name="GameliftFleetAnywhereConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost">resetCost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCost` <a name="resetCost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost"></a>

```typescript
public resetCost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput">costInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost">cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `costInput`<sup>Optional</sup> <a name="costInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput"></a>

```typescript
public readonly costInput: string;
```

- *Type:* string

---

##### `cost`<sup>Required</sup> <a name="cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost"></a>

```typescript
public readonly cost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetAnywhereConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---


### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetCertificateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">resetCertificateType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateType` <a name="resetCertificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```typescript
public resetCertificateType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```typescript
public readonly certificateTypeInput: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetCertificateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionsList <a name="GameliftFleetEc2InboundPermissionsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetEc2InboundPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get"></a>

```typescript
public get(index: number): GameliftFleetEc2InboundPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetEc2InboundPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---


### GameliftFleetEc2InboundPermissionsOutputReference <a name="GameliftFleetEc2InboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetEc2InboundPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>

---


### GameliftFleetLocationsList <a name="GameliftFleetLocationsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get"></a>

```typescript
public get(index: number): GameliftFleetLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetLocations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---


### GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">resetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">resetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScaleInAfterInactivityMinutes` <a name="resetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```typescript
public resetScaleInAfterInactivityMinutes(): void
```

##### `resetZeroCapacityStrategy` <a name="resetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```typescript
public resetZeroCapacityStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">scaleInAfterInactivityMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">zeroCapacityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">scaleInAfterInactivityMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">zeroCapacityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="scaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```typescript
public readonly scaleInAfterInactivityMinutesInput: number;
```

- *Type:* number

---

##### `zeroCapacityStrategyInput`<sup>Optional</sup> <a name="zeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```typescript
public readonly zeroCapacityStrategyInput: string;
```

- *Type:* string

---

##### `scaleInAfterInactivityMinutes`<sup>Required</sup> <a name="scaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```typescript
public readonly scaleInAfterInactivityMinutes: number;
```

- *Type:* number

---

##### `zeroCapacityStrategy`<sup>Required</sup> <a name="zeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```typescript
public readonly zeroCapacityStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftFleetLocationsLocationCapacityOutputReference <a name="GameliftFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">putManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">resetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">resetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize">resetMinSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedCapacityConfiguration` <a name="putManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```typescript
public putManagedCapacityConfiguration(value: GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `resetDesiredEc2Instances` <a name="resetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```typescript
public resetDesiredEc2Instances(): void
```

##### `resetManagedCapacityConfiguration` <a name="resetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```typescript
public resetManagedCapacityConfiguration(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```typescript
public resetMinSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">managedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">desiredEc2InstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">managedCapacityConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">desiredEc2Instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedCapacityConfiguration`<sup>Required</sup> <a name="managedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```typescript
public readonly managedCapacityConfiguration: GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `desiredEc2InstancesInput`<sup>Optional</sup> <a name="desiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```typescript
public readonly desiredEc2InstancesInput: number;
```

- *Type:* number

---

##### `managedCapacityConfigurationInput`<sup>Optional</sup> <a name="managedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```typescript
public readonly managedCapacityConfigurationInput: IResolvable | GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `desiredEc2Instances`<sup>Required</sup> <a name="desiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```typescript
public readonly desiredEc2Instances: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetLocationsLocationCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---


### GameliftFleetLocationsOutputReference <a name="GameliftFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity">putLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity">resetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus">resetPlayerGatewayStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationCapacity` <a name="putLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity"></a>

```typescript
public putLocationCapacity(value: GameliftFleetLocationsLocationCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLocationCapacity` <a name="resetLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity"></a>

```typescript
public resetLocationCapacity(): void
```

##### `resetPlayerGatewayStatus` <a name="resetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```typescript
public resetPlayerGatewayStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity">locationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput">locationCapacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput">playerGatewayStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus">playerGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationCapacity`<sup>Required</sup> <a name="locationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity"></a>

```typescript
public readonly locationCapacity: GameliftFleetLocationsLocationCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a>

---

##### `locationCapacityInput`<sup>Optional</sup> <a name="locationCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput"></a>

```typescript
public readonly locationCapacityInput: IResolvable | GameliftFleetLocationsLocationCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `playerGatewayStatusInput`<sup>Optional</sup> <a name="playerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```typescript
public readonly playerGatewayStatusInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `playerGatewayStatus`<sup>Required</sup> <a name="playerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```typescript
public readonly playerGatewayStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetLocations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>

---


### GameliftFleetPlayerGatewayConfigurationOutputReference <a name="GameliftFleetPlayerGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported">resetGameServerIpProtocolSupported</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGameServerIpProtocolSupported` <a name="resetGameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported"></a>

```typescript
public resetGameServerIpProtocolSupported(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput">gameServerIpProtocolSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported">gameServerIpProtocolSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gameServerIpProtocolSupportedInput`<sup>Optional</sup> <a name="gameServerIpProtocolSupportedInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput"></a>

```typescript
public readonly gameServerIpProtocolSupportedInput: string;
```

- *Type:* string

---

##### `gameServerIpProtocolSupported`<sup>Required</sup> <a name="gameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported"></a>

```typescript
public readonly gameServerIpProtocolSupported: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetPlayerGatewayConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">resetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">resetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewGameSessionsPerCreator` <a name="resetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```typescript
public resetNewGameSessionsPerCreator(): void
```

##### `resetPolicyPeriodInMinutes` <a name="resetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```typescript
public resetPolicyPeriodInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">newGameSessionsPerCreatorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">policyPeriodInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">newGameSessionsPerCreator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">policyPeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="newGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```typescript
public readonly newGameSessionsPerCreatorInput: number;
```

- *Type:* number

---

##### `policyPeriodInMinutesInput`<sup>Optional</sup> <a name="policyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```typescript
public readonly policyPeriodInMinutesInput: number;
```

- *Type:* number

---

##### `newGameSessionsPerCreator`<sup>Required</sup> <a name="newGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```typescript
public readonly newGameSessionsPerCreator: number;
```

- *Type:* number

---

##### `policyPeriodInMinutes`<sup>Required</sup> <a name="policyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```typescript
public readonly policyPeriodInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetResourceCreationLimitPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses">putServerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">resetGameSessionActivationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">resetMaxConcurrentGameSessionActivations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses">resetServerProcesses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerProcesses` <a name="putServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses"></a>

```typescript
public putServerProcesses(value: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---

##### `resetGameSessionActivationTimeoutSeconds` <a name="resetGameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```typescript
public resetGameSessionActivationTimeoutSeconds(): void
```

##### `resetMaxConcurrentGameSessionActivations` <a name="resetMaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```typescript
public resetMaxConcurrentGameSessionActivations(): void
```

##### `resetServerProcesses` <a name="resetServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses"></a>

```typescript
public resetServerProcesses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses">serverProcesses</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">gameSessionActivationTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">maxConcurrentGameSessionActivationsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput">serverProcessesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">gameSessionActivationTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">maxConcurrentGameSessionActivations</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverProcesses`<sup>Required</sup> <a name="serverProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses"></a>

```typescript
public readonly serverProcesses: GameliftFleetRuntimeConfigurationServerProcessesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a>

---

##### `gameSessionActivationTimeoutSecondsInput`<sup>Optional</sup> <a name="gameSessionActivationTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```typescript
public readonly gameSessionActivationTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `maxConcurrentGameSessionActivationsInput`<sup>Optional</sup> <a name="maxConcurrentGameSessionActivationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```typescript
public readonly maxConcurrentGameSessionActivationsInput: number;
```

- *Type:* number

---

##### `serverProcessesInput`<sup>Optional</sup> <a name="serverProcessesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput"></a>

```typescript
public readonly serverProcessesInput: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---

##### `gameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="gameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```typescript
public readonly gameSessionActivationTimeoutSeconds: number;
```

- *Type:* number

---

##### `maxConcurrentGameSessionActivations`<sup>Required</sup> <a name="maxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```typescript
public readonly maxConcurrentGameSessionActivations: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetRuntimeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessesList <a name="GameliftFleetRuntimeConfigurationServerProcessesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get"></a>

```typescript
public get(index: number): GameliftFleetRuntimeConfigurationServerProcessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---


### GameliftFleetRuntimeConfigurationServerProcessesOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions">resetConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath">resetLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentExecutions` <a name="resetConcurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions"></a>

```typescript
public resetConcurrentExecutions(): void
```

##### `resetLaunchPath` <a name="resetLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath"></a>

```typescript
public resetLaunchPath(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput">concurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput">launchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions">concurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath">launchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrentExecutionsInput`<sup>Optional</sup> <a name="concurrentExecutionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput"></a>

```typescript
public readonly concurrentExecutionsInput: number;
```

- *Type:* number

---

##### `launchPathInput`<sup>Optional</sup> <a name="launchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput"></a>

```typescript
public readonly launchPathInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `concurrentExecutions`<sup>Required</sup> <a name="concurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions"></a>

```typescript
public readonly concurrentExecutions: number;
```

- *Type:* number

---

##### `launchPath`<sup>Required</sup> <a name="launchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath"></a>

```typescript
public readonly launchPath: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetRuntimeConfigurationServerProcesses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>

---


### GameliftFleetScalingPoliciesList <a name="GameliftFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetScalingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get"></a>

```typescript
public get(index: number): GameliftFleetScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetScalingPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---


### GameliftFleetScalingPoliciesOutputReference <a name="GameliftFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetScalingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration">putTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName">resetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment">resetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">resetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration">resetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus">resetUpdateStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetConfiguration` <a name="putTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```typescript
public putTargetConfiguration(value: GameliftFleetScalingPoliciesTargetConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMetricName` <a name="resetMetricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName"></a>

```typescript
public resetMetricName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```typescript
public resetPolicyType(): void
```

##### `resetScalingAdjustment` <a name="resetScalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```typescript
public resetScalingAdjustment(): void
```

##### `resetScalingAdjustmentType` <a name="resetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```typescript
public resetScalingAdjustmentType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTargetConfiguration` <a name="resetTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```typescript
public resetTargetConfiguration(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetUpdateStatus` <a name="resetUpdateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus"></a>

```typescript
public resetUpdateStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration">targetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">scalingAdjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">scalingAdjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput">targetConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput">updateStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment">scalingAdjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">scalingAdjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus">updateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetConfiguration`<sup>Required</sup> <a name="targetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```typescript
public readonly targetConfiguration: GameliftFleetScalingPoliciesTargetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `scalingAdjustmentInput`<sup>Optional</sup> <a name="scalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```typescript
public readonly scalingAdjustmentInput: number;
```

- *Type:* number

---

##### `scalingAdjustmentTypeInput`<sup>Optional</sup> <a name="scalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```typescript
public readonly scalingAdjustmentTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetConfigurationInput`<sup>Optional</sup> <a name="targetConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```typescript
public readonly targetConfigurationInput: IResolvable | GameliftFleetScalingPoliciesTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `updateStatusInput`<sup>Optional</sup> <a name="updateStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput"></a>

```typescript
public readonly updateStatusInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `scalingAdjustment`<sup>Required</sup> <a name="scalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```typescript
public readonly scalingAdjustment: number;
```

- *Type:* number

---

##### `scalingAdjustmentType`<sup>Required</sup> <a name="scalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```typescript
public readonly scalingAdjustmentType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus"></a>

```typescript
public readonly updateStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetScalingPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>

---


### GameliftFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetScalingPoliciesTargetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftFleetTagsList <a name="GameliftFleetTagsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get"></a>

```typescript
public get(index: number): GameliftFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---


### GameliftFleetTagsOutputReference <a name="GameliftFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer"></a>

```typescript
import { gameliftFleet } from '@cdktn/provider-awscc'

new gameliftFleet.GameliftFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftFleetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>

---



