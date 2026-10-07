# `appstreamFleet` Submodule <a name="`appstreamFleet` Submodule" id="@cdktn/provider-awscc.appstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleet <a name="AppstreamFleet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet awscc_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleet(scope: Construct, id: string, config: AppstreamFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig">AppstreamFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity">putComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo">putDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig">putRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location">putSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete">resetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity">resetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1">resetDisableImdsv1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds">resetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo">resetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess">resetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType">resetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds">resetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn">resetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions">resetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance">resetMaxSessionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds">resetMaxUserDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig">resetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location">resetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView">resetStreamView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings">resetUsbDeviceFilterStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeCapacity` <a name="putComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity"></a>

```typescript
public putComputeCapacity(value: AppstreamFleetComputeCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `putDomainJoinInfo` <a name="putDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo"></a>

```typescript
public putDomainJoinInfo(value: AppstreamFleetDomainJoinInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `putRootVolumeConfig` <a name="putRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig"></a>

```typescript
public putRootVolumeConfig(value: AppstreamFleetRootVolumeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `putSessionScriptS3Location` <a name="putSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location"></a>

```typescript
public putSessionScriptS3Location(value: AppstreamFleetSessionScriptS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamFleetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig"></a>

```typescript
public putVpcConfig(value: AppstreamFleetVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `resetAttributesToDelete` <a name="resetAttributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete"></a>

```typescript
public resetAttributesToDelete(): void
```

##### `resetComputeCapacity` <a name="resetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity"></a>

```typescript
public resetComputeCapacity(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableImdsv1` <a name="resetDisableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1"></a>

```typescript
public resetDisableImdsv1(): void
```

##### `resetDisconnectTimeoutInSeconds` <a name="resetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds"></a>

```typescript
public resetDisconnectTimeoutInSeconds(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomainJoinInfo` <a name="resetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo"></a>

```typescript
public resetDomainJoinInfo(): void
```

##### `resetEnableDefaultInternetAccess` <a name="resetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess"></a>

```typescript
public resetEnableDefaultInternetAccess(): void
```

##### `resetFleetType` <a name="resetFleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType"></a>

```typescript
public resetFleetType(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetIdleDisconnectTimeoutInSeconds` <a name="resetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds"></a>

```typescript
public resetIdleDisconnectTimeoutInSeconds(): void
```

##### `resetImageArn` <a name="resetImageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn"></a>

```typescript
public resetImageArn(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetMaxConcurrentSessions` <a name="resetMaxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions"></a>

```typescript
public resetMaxConcurrentSessions(): void
```

##### `resetMaxSessionsPerInstance` <a name="resetMaxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance"></a>

```typescript
public resetMaxSessionsPerInstance(): void
```

##### `resetMaxUserDurationInSeconds` <a name="resetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds"></a>

```typescript
public resetMaxUserDurationInSeconds(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRootVolumeConfig` <a name="resetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig"></a>

```typescript
public resetRootVolumeConfig(): void
```

##### `resetSessionScriptS3Location` <a name="resetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location"></a>

```typescript
public resetSessionScriptS3Location(): void
```

##### `resetStreamView` <a name="resetStreamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView"></a>

```typescript
public resetStreamView(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUsbDeviceFilterStrings` <a name="resetUsbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings"></a>

```typescript
public resetUsbDeviceFilterStrings(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

appstreamFleet.AppstreamFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

appstreamFleet.AppstreamFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

appstreamFleet.AppstreamFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

appstreamFleet.AppstreamFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput">attributesToDeleteInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput">computeCapacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input">disableImdsv1Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput">disconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput">domainJoinInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput">enableDefaultInternetAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput">idleDisconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput">imageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput">maxConcurrentSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput">maxSessionsPerInstanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput">maxUserDurationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput">rootVolumeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput">sessionScriptS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput">streamViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput">usbDeviceFilterStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1">disableImdsv1</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType">fleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView">streamView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computeCapacity`<sup>Required</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity"></a>

```typescript
public readonly computeCapacity: AppstreamFleetComputeCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a>

---

##### `domainJoinInfo`<sup>Required</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo"></a>

```typescript
public readonly domainJoinInfo: AppstreamFleetDomainJoinInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rootVolumeConfig`<sup>Required</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig"></a>

```typescript
public readonly rootVolumeConfig: AppstreamFleetRootVolumeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a>

---

##### `sessionScriptS3Location`<sup>Required</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location"></a>

```typescript
public readonly sessionScriptS3Location: AppstreamFleetSessionScriptS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags"></a>

```typescript
public readonly tags: AppstreamFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamFleetVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a>

---

##### `attributesToDeleteInput`<sup>Optional</sup> <a name="attributesToDeleteInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput"></a>

```typescript
public readonly attributesToDeleteInput: string[];
```

- *Type:* string[]

---

##### `computeCapacityInput`<sup>Optional</sup> <a name="computeCapacityInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput"></a>

```typescript
public readonly computeCapacityInput: IResolvable | AppstreamFleetComputeCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableImdsv1Input`<sup>Optional</sup> <a name="disableImdsv1Input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input"></a>

```typescript
public readonly disableImdsv1Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="disconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput"></a>

```typescript
public readonly disconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainJoinInfoInput`<sup>Optional</sup> <a name="domainJoinInfoInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput"></a>

```typescript
public readonly domainJoinInfoInput: IResolvable | AppstreamFleetDomainJoinInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `enableDefaultInternetAccessInput`<sup>Optional</sup> <a name="enableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput"></a>

```typescript
public readonly enableDefaultInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput"></a>

```typescript
public readonly fleetTypeInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput"></a>

```typescript
public readonly idleDisconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput"></a>

```typescript
public readonly imageArnInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `maxConcurrentSessionsInput`<sup>Optional</sup> <a name="maxConcurrentSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput"></a>

```typescript
public readonly maxConcurrentSessionsInput: number;
```

- *Type:* number

---

##### `maxSessionsPerInstanceInput`<sup>Optional</sup> <a name="maxSessionsPerInstanceInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput"></a>

```typescript
public readonly maxSessionsPerInstanceInput: number;
```

- *Type:* number

---

##### `maxUserDurationInSecondsInput`<sup>Optional</sup> <a name="maxUserDurationInSecondsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput"></a>

```typescript
public readonly maxUserDurationInSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `rootVolumeConfigInput`<sup>Optional</sup> <a name="rootVolumeConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput"></a>

```typescript
public readonly rootVolumeConfigInput: IResolvable | AppstreamFleetRootVolumeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `sessionScriptS3LocationInput`<sup>Optional</sup> <a name="sessionScriptS3LocationInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput"></a>

```typescript
public readonly sessionScriptS3LocationInput: IResolvable | AppstreamFleetSessionScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `streamViewInput`<sup>Optional</sup> <a name="streamViewInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput"></a>

```typescript
public readonly streamViewInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---

##### `usbDeviceFilterStringsInput`<sup>Optional</sup> <a name="usbDeviceFilterStringsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput"></a>

```typescript
public readonly usbDeviceFilterStringsInput: string[];
```

- *Type:* string[]

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | AppstreamFleetVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableImdsv1`<sup>Required</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1"></a>

```typescript
public readonly disableImdsv1: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `maxConcurrentSessions`<sup>Required</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions"></a>

```typescript
public readonly maxConcurrentSessions: number;
```

- *Type:* number

---

##### `maxSessionsPerInstance`<sup>Required</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance"></a>

```typescript
public readonly maxSessionsPerInstance: number;
```

- *Type:* number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `streamView`<sup>Required</sup> <a name="streamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView"></a>

```typescript
public readonly streamView: string;
```

- *Type:* string

---

##### `usbDeviceFilterStrings`<sup>Required</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings"></a>

```typescript
public readonly usbDeviceFilterStrings: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetComputeCapacity <a name="AppstreamFleetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetComputeCapacity: appstreamFleet.AppstreamFleetComputeCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances">desiredInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions">desiredSessions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}. |

---

##### `desiredInstances`<sup>Optional</sup> <a name="desiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances"></a>

```typescript
public readonly desiredInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

##### `desiredSessions`<sup>Optional</sup> <a name="desiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions"></a>

```typescript
public readonly desiredSessions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}.

---

### AppstreamFleetConfig <a name="AppstreamFleetConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetConfig: appstreamFleet.AppstreamFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity">computeCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1">disableImdsv1</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType">fleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn">imageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance">maxSessionsPerInstance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location">sessionScriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView">streamView</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings">usbDeviceFilterStrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `computeCapacity`<sup>Optional</sup> <a name="computeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity"></a>

```typescript
public readonly computeCapacity: AppstreamFleetComputeCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `disableImdsv1`<sup>Optional</sup> <a name="disableImdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1"></a>

```typescript
public readonly disableImdsv1: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo"></a>

```typescript
public readonly domainJoinInfo: AppstreamFleetDomainJoinInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `fleetType`<sup>Optional</sup> <a name="fleetType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType"></a>

```typescript
public readonly fleetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions"></a>

```typescript
public readonly maxConcurrentSessions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `maxSessionsPerInstance`<sup>Optional</sup> <a name="maxSessionsPerInstance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance"></a>

```typescript
public readonly maxSessionsPerInstance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `rootVolumeConfig`<sup>Optional</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig"></a>

```typescript
public readonly rootVolumeConfig: AppstreamFleetRootVolumeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `sessionScriptS3Location`<sup>Optional</sup> <a name="sessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location"></a>

```typescript
public readonly sessionScriptS3Location: AppstreamFleetSessionScriptS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `streamView`<sup>Optional</sup> <a name="streamView" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView"></a>

```typescript
public readonly streamView: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `usbDeviceFilterStrings`<sup>Optional</sup> <a name="usbDeviceFilterStrings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings"></a>

```typescript
public readonly usbDeviceFilterStrings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamFleetVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

### AppstreamFleetDomainJoinInfo <a name="AppstreamFleetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetDomainJoinInfo: appstreamFleet.AppstreamFleetDomainJoinInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName">directoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

### AppstreamFleetRootVolumeConfig <a name="AppstreamFleetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetRootVolumeConfig: appstreamFleet.AppstreamFleetRootVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}. |

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}.

---

### AppstreamFleetSessionScriptS3Location <a name="AppstreamFleetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetSessionScriptS3Location: appstreamFleet.AppstreamFleetSessionScriptS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}.

---

### AppstreamFleetTags <a name="AppstreamFleetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetTags: appstreamFleet.AppstreamFleetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#key AppstreamFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#value AppstreamFleet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#key AppstreamFleet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#value AppstreamFleet#value}.

---

### AppstreamFleetVpcConfig <a name="AppstreamFleetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

const appstreamFleetVpcConfig: appstreamFleet.AppstreamFleetVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamFleetComputeCapacityOutputReference <a name="AppstreamFleetComputeCapacityOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetComputeCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances">resetDesiredInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions">resetDesiredSessions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredInstances` <a name="resetDesiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances"></a>

```typescript
public resetDesiredInstances(): void
```

##### `resetDesiredSessions` <a name="resetDesiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions"></a>

```typescript
public resetDesiredSessions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput">desiredInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput">desiredSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances">desiredInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions">desiredSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredInstancesInput`<sup>Optional</sup> <a name="desiredInstancesInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput"></a>

```typescript
public readonly desiredInstancesInput: number;
```

- *Type:* number

---

##### `desiredSessionsInput`<sup>Optional</sup> <a name="desiredSessionsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput"></a>

```typescript
public readonly desiredSessionsInput: number;
```

- *Type:* number

---

##### `desiredInstances`<sup>Required</sup> <a name="desiredInstances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```typescript
public readonly desiredInstances: number;
```

- *Type:* number

---

##### `desiredSessions`<sup>Required</sup> <a name="desiredSessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions"></a>

```typescript
public readonly desiredSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetComputeCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---


### AppstreamFleetDomainJoinInfoOutputReference <a name="AppstreamFleetDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName"></a>

```typescript
public resetDirectoryName(): void
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```typescript
public resetOrganizationalUnitDistinguishedName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNameInput: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetDomainJoinInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---


### AppstreamFleetRootVolumeConfigOutputReference <a name="AppstreamFleetRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```typescript
public resetVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetRootVolumeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---


### AppstreamFleetSessionScriptS3LocationOutputReference <a name="AppstreamFleetSessionScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetSessionScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---


### AppstreamFleetTagsList <a name="AppstreamFleetTagsList" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get"></a>

```typescript
public get(index: number): AppstreamFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>[]

---


### AppstreamFleetTagsOutputReference <a name="AppstreamFleetTagsOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>

---


### AppstreamFleetVpcConfigOutputReference <a name="AppstreamFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer"></a>

```typescript
import { appstreamFleet } from '@cdktn/provider-awscc'

new appstreamFleet.AppstreamFleetVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamFleetVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---



