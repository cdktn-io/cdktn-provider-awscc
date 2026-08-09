# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktn/provider-awscc.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder awscc_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilder(scope: Construct, id: string, config: AppstreamImageBuilderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig">AppstreamImageBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">putDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig">putRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">resetAppstreamAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">resetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">resetEnableDefaultInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">resetImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig">resetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall">resetSoftwaresToInstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall">resetSoftwaresToUninstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints"></a>

```typescript
public putAccessEndpoints(value: IResolvable | AppstreamImageBuilderAccessEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]

---

##### `putDomainJoinInfo` <a name="putDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```typescript
public putDomainJoinInfo(value: AppstreamImageBuilderDomainJoinInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `putRootVolumeConfig` <a name="putRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig"></a>

```typescript
public putRootVolumeConfig(value: AppstreamImageBuilderRootVolumeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamImageBuilderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```typescript
public putVpcConfig(value: AppstreamImageBuilderVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints"></a>

```typescript
public resetAccessEndpoints(): void
```

##### `resetAppstreamAgentVersion` <a name="resetAppstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```typescript
public resetAppstreamAgentVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomainJoinInfo` <a name="resetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```typescript
public resetDomainJoinInfo(): void
```

##### `resetEnableDefaultInternetAccess` <a name="resetEnableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```typescript
public resetEnableDefaultInternetAccess(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetImageArn` <a name="resetImageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```typescript
public resetImageArn(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetRootVolumeConfig` <a name="resetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig"></a>

```typescript
public resetRootVolumeConfig(): void
```

##### `resetSoftwaresToInstall` <a name="resetSoftwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall"></a>

```typescript
public resetSoftwaresToInstall(): void
```

##### `resetSoftwaresToUninstall` <a name="resetSoftwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall"></a>

```typescript
public resetSoftwaresToUninstall(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

appstreamImageBuilder.AppstreamImageBuilder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamImageBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamImageBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamImageBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl">streamingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">appstreamAgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">domainJoinInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">enableDefaultInternetAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">imageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput">rootVolumeConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput">softwaresToInstallInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput">softwaresToUninstallInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall">softwaresToInstall</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall">softwaresToUninstall</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: AppstreamImageBuilderAccessEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a>

---

##### `domainJoinInfo`<sup>Required</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```typescript
public readonly domainJoinInfo: AppstreamImageBuilderDomainJoinInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rootVolumeConfig`<sup>Required</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig"></a>

```typescript
public readonly rootVolumeConfig: AppstreamImageBuilderRootVolumeConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a>

---

##### `streamingUrl`<sup>Required</sup> <a name="streamingUrl" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl"></a>

```typescript
public readonly streamingUrl: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```typescript
public readonly tags: AppstreamImageBuilderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamImageBuilderVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput"></a>

```typescript
public readonly accessEndpointsInput: IResolvable | AppstreamImageBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]

---

##### `appstreamAgentVersionInput`<sup>Optional</sup> <a name="appstreamAgentVersionInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```typescript
public readonly appstreamAgentVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainJoinInfoInput`<sup>Optional</sup> <a name="domainJoinInfoInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```typescript
public readonly domainJoinInfoInput: IResolvable | AppstreamImageBuilderDomainJoinInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `enableDefaultInternetAccessInput`<sup>Optional</sup> <a name="enableDefaultInternetAccessInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```typescript
public readonly enableDefaultInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```typescript
public readonly imageArnInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rootVolumeConfigInput`<sup>Optional</sup> <a name="rootVolumeConfigInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput"></a>

```typescript
public readonly rootVolumeConfigInput: IResolvable | AppstreamImageBuilderRootVolumeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---

##### `softwaresToInstallInput`<sup>Optional</sup> <a name="softwaresToInstallInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput"></a>

```typescript
public readonly softwaresToInstallInput: string[];
```

- *Type:* string[]

---

##### `softwaresToUninstallInput`<sup>Optional</sup> <a name="softwaresToUninstallInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput"></a>

```typescript
public readonly softwaresToUninstallInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamImageBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | AppstreamImageBuilderVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `appstreamAgentVersion`<sup>Required</sup> <a name="appstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```typescript
public readonly appstreamAgentVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableDefaultInternetAccess`<sup>Required</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `softwaresToInstall`<sup>Required</sup> <a name="softwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall"></a>

```typescript
public readonly softwaresToInstall: string[];
```

- *Type:* string[]

---

##### `softwaresToUninstall`<sup>Required</sup> <a name="softwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall"></a>

```typescript
public readonly softwaresToUninstall: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoints <a name="AppstreamImageBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderAccessEndpoints: appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId">vpceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderConfig: appstreamImageBuilder.AppstreamImageBuilderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">appstreamAgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">domainJoinInfo</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">enableDefaultInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">imageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig">rootVolumeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall">softwaresToInstall</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall">softwaresToUninstall</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: IResolvable | AppstreamImageBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}.

---

##### `appstreamAgentVersion`<sup>Optional</sup> <a name="appstreamAgentVersion" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```typescript
public readonly appstreamAgentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `domainJoinInfo`<sup>Optional</sup> <a name="domainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```typescript
public readonly domainJoinInfo: AppstreamImageBuilderDomainJoinInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}.

---

##### `enableDefaultInternetAccess`<sup>Optional</sup> <a name="enableDefaultInternetAccess" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```typescript
public readonly enableDefaultInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `imageArn`<sup>Optional</sup> <a name="imageArn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `rootVolumeConfig`<sup>Optional</sup> <a name="rootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig"></a>

```typescript
public readonly rootVolumeConfig: AppstreamImageBuilderRootVolumeConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}.

---

##### `softwaresToInstall`<sup>Optional</sup> <a name="softwaresToInstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall"></a>

```typescript
public readonly softwaresToInstall: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}.

---

##### `softwaresToUninstall`<sup>Optional</sup> <a name="softwaresToUninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall"></a>

```typescript
public readonly softwaresToUninstall: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamImageBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: AppstreamImageBuilderVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}.

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderDomainJoinInfo: appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">directoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderRootVolumeConfig <a name="AppstreamImageBuilderRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderRootVolumeConfig: appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}. |

---

##### `volumeSizeInGb`<sup>Optional</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}.

---

### AppstreamImageBuilderTags <a name="AppstreamImageBuilderTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderTags: appstreamImageBuilder.AppstreamImageBuilderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

const appstreamImageBuilderVpcConfig: appstreamImageBuilder.AppstreamImageBuilderVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointsList <a name="AppstreamImageBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get"></a>

```typescript
public get(index: number): AppstreamImageBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>[]

---


### AppstreamImageBuilderAccessEndpointsOutputReference <a name="AppstreamImageBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetVpceId` <a name="resetVpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```typescript
public resetVpceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId">vpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```typescript
public readonly vpceIdInput: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderAccessEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryName` <a name="resetDirectoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```typescript
public resetDirectoryName(): void
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```typescript
public resetOrganizationalUnitDistinguishedName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNameInput: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderDomainJoinInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---


### AppstreamImageBuilderRootVolumeConfigOutputReference <a name="AppstreamImageBuilderRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb">resetVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeSizeInGb` <a name="resetVolumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```typescript
public resetVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput">volumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb">volumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumeSizeInGbInput`<sup>Optional</sup> <a name="volumeSizeInGbInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```typescript
public readonly volumeSizeInGbInput: number;
```

- *Type:* number

---

##### `volumeSizeInGb`<sup>Required</sup> <a name="volumeSizeInGb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```typescript
public readonly volumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderRootVolumeConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---


### AppstreamImageBuilderTagsList <a name="AppstreamImageBuilderTagsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get"></a>

```typescript
public get(index: number): AppstreamImageBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>[]

---


### AppstreamImageBuilderTagsOutputReference <a name="AppstreamImageBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```typescript
import { appstreamImageBuilder } from '@cdktn/provider-awscc'

new appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamImageBuilderVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---



