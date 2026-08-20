# `ec2Instance` Submodule <a name="`ec2Instance` Submodule" id="@cdktn/provider-awscc.ec2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Instance <a name="Ec2Instance" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance awscc_ec2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2Instance(scope: Construct, id: string, config?: Ec2InstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig">Ec2InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig">Ec2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions">putCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications">putElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators">putElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions">putHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses">putIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications">putLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations">putSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo">resetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity">resetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions">resetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination">resetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications">resetElasticGpuSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators">resetElasticInferenceAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions">resetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn">resetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior">resetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId">resetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications">resetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName">resetPlacementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation">resetPropagateTagsToVolumeOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId">resetRamdiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck">resetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations">resetSsmAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | Ec2InstanceBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---

##### `putCpuOptions` <a name="putCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions"></a>

```typescript
public putCpuOptions(value: Ec2InstanceCpuOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification"></a>

```typescript
public putCreditSpecification(value: Ec2InstanceCreditSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `putElasticGpuSpecifications` <a name="putElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications"></a>

```typescript
public putElasticGpuSpecifications(value: IResolvable | Ec2InstanceElasticGpuSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticGpuSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---

##### `putElasticInferenceAccelerators` <a name="putElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators"></a>

```typescript
public putElasticInferenceAccelerators(value: IResolvable | Ec2InstanceElasticInferenceAccelerators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putElasticInferenceAccelerators.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions"></a>

```typescript
public putEnclaveOptions(value: Ec2InstanceEnclaveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `putHibernationOptions` <a name="putHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions"></a>

```typescript
public putHibernationOptions(value: Ec2InstanceHibernationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `putIpv6Addresses` <a name="putIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses"></a>

```typescript
public putIpv6Addresses(value: IResolvable | Ec2InstanceIpv6Addresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putIpv6Addresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: Ec2InstanceLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `putLicenseSpecifications` <a name="putLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications"></a>

```typescript
public putLicenseSpecifications(value: IResolvable | Ec2InstanceLicenseSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putLicenseSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: Ec2InstanceMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | Ec2InstanceNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions"></a>

```typescript
public putPrivateDnsNameOptions(value: Ec2InstancePrivateDnsNameOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `putSsmAssociations` <a name="putSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations"></a>

```typescript
public putSsmAssociations(value: IResolvable | Ec2InstanceSsmAssociations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putSsmAssociations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2InstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | Ec2InstanceVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAdditionalInfo"></a>

```typescript
public resetAdditionalInfo(): void
```

##### `resetAffinity` <a name="resetAffinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAffinity"></a>

```typescript
public resetAffinity(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetCpuOptions` <a name="resetCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCpuOptions"></a>

```typescript
public resetCpuOptions(): void
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetCreditSpecification"></a>

```typescript
public resetCreditSpecification(): void
```

##### `resetDisableApiTermination` <a name="resetDisableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetDisableApiTermination"></a>

```typescript
public resetDisableApiTermination(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetElasticGpuSpecifications` <a name="resetElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticGpuSpecifications"></a>

```typescript
public resetElasticGpuSpecifications(): void
```

##### `resetElasticInferenceAccelerators` <a name="resetElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetElasticInferenceAccelerators"></a>

```typescript
public resetElasticInferenceAccelerators(): void
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetEnclaveOptions"></a>

```typescript
public resetEnclaveOptions(): void
```

##### `resetHibernationOptions` <a name="resetHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHibernationOptions"></a>

```typescript
public resetHibernationOptions(): void
```

##### `resetHostId` <a name="resetHostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetHostResourceGroupArn` <a name="resetHostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetHostResourceGroupArn"></a>

```typescript
public resetHostResourceGroupArn(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceInitiatedShutdownBehavior` <a name="resetInstanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceInitiatedShutdownBehavior"></a>

```typescript
public resetInstanceInitiatedShutdownBehavior(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```

##### `resetKernelId` <a name="resetKernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKernelId"></a>

```typescript
public resetKernelId(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetLicenseSpecifications` <a name="resetLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetLicenseSpecifications"></a>

```typescript
public resetLicenseSpecifications(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetPlacementGroupName` <a name="resetPlacementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPlacementGroupName"></a>

```typescript
public resetPlacementGroupName(): void
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateDnsNameOptions"></a>

```typescript
public resetPrivateDnsNameOptions(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetPropagateTagsToVolumeOnCreation` <a name="resetPropagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetPropagateTagsToVolumeOnCreation"></a>

```typescript
public resetPropagateTagsToVolumeOnCreation(): void
```

##### `resetRamdiskId` <a name="resetRamdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetRamdiskId"></a>

```typescript
public resetRamdiskId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSourceDestCheck` <a name="resetSourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSourceDestCheck"></a>

```typescript
public resetSourceDestCheck(): void
```

##### `resetSsmAssociations` <a name="resetSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSsmAssociations"></a>

```typescript
public resetSsmAssociations(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetTenancy"></a>

```typescript
public resetTenancy(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

ec2Instance.Ec2Instance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

ec2Instance.Ec2Instance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

ec2Instance.Ec2Instance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

ec2Instance.Ec2Instance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications">licenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName">privateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName">publicDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations">ssmAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput">additionalInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput">affinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput">cpuOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput">disableApiTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput">elasticGpuSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput">elasticInferenceAcceleratorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput">hibernationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput">hostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput">instanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput">kernelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput">launchTemplateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput">licenseSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput">monitoringInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput">placementGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput">propagateTagsToVolumeOnCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput">ramdiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput">sourceDestCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput">ssmAssociationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput">volumesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity">affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring">monitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName">placementGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId">ramdiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: Ec2InstanceBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList">Ec2InstanceBlockDeviceMappingsList</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: Ec2InstanceCpuOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference">Ec2InstanceCpuOptionsOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: Ec2InstanceCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference">Ec2InstanceCreditSpecificationOutputReference</a>

---

##### `elasticGpuSpecifications`<sup>Required</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: Ec2InstanceElasticGpuSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList">Ec2InstanceElasticGpuSpecificationsList</a>

---

##### `elasticInferenceAccelerators`<sup>Required</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAccelerators"></a>

```typescript
public readonly elasticInferenceAccelerators: Ec2InstanceElasticInferenceAcceleratorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList">Ec2InstanceElasticInferenceAcceleratorsList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: Ec2InstanceEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference">Ec2InstanceEnclaveOptionsOutputReference</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: Ec2InstanceHibernationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference">Ec2InstanceHibernationOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: Ec2InstanceIpv6AddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList">Ec2InstanceIpv6AddressesList</a>

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: Ec2InstanceLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference">Ec2InstanceLaunchTemplateOutputReference</a>

---

##### `licenseSpecifications`<sup>Required</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: Ec2InstanceLicenseSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList">Ec2InstanceLicenseSpecificationsList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: Ec2InstanceMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference">Ec2InstanceMetadataOptionsOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: Ec2InstanceNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList">Ec2InstanceNetworkInterfacesList</a>

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsName"></a>

```typescript
public readonly privateDnsName: string;
```

- *Type:* string

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: Ec2InstancePrivateDnsNameOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference">Ec2InstancePrivateDnsNameOptionsOutputReference</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicDnsName`<sup>Required</sup> <a name="publicDnsName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicDnsName"></a>

```typescript
public readonly publicDnsName: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `ssmAssociations`<sup>Required</sup> <a name="ssmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociations"></a>

```typescript
public readonly ssmAssociations: Ec2InstanceSsmAssociationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList">Ec2InstanceSsmAssociationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.state"></a>

```typescript
public readonly state: Ec2InstanceStateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference">Ec2InstanceStateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tags"></a>

```typescript
public readonly tags: Ec2InstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList">Ec2InstanceTagsList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumes"></a>

```typescript
public readonly volumes: Ec2InstanceVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList">Ec2InstanceVolumesList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfoInput"></a>

```typescript
public readonly additionalInfoInput: string;
```

- *Type:* string

---

##### `affinityInput`<sup>Optional</sup> <a name="affinityInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinityInput"></a>

```typescript
public readonly affinityInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | Ec2InstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---

##### `cpuOptionsInput`<sup>Optional</sup> <a name="cpuOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.cpuOptionsInput"></a>

```typescript
public readonly cpuOptionsInput: IResolvable | Ec2InstanceCpuOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.creditSpecificationInput"></a>

```typescript
public readonly creditSpecificationInput: IResolvable | Ec2InstanceCreditSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---

##### `disableApiTerminationInput`<sup>Optional</sup> <a name="disableApiTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTerminationInput"></a>

```typescript
public readonly disableApiTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `elasticGpuSpecificationsInput`<sup>Optional</sup> <a name="elasticGpuSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticGpuSpecificationsInput"></a>

```typescript
public readonly elasticGpuSpecificationsInput: IResolvable | Ec2InstanceElasticGpuSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---

##### `elasticInferenceAcceleratorsInput`<sup>Optional</sup> <a name="elasticInferenceAcceleratorsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.elasticInferenceAcceleratorsInput"></a>

```typescript
public readonly elasticInferenceAcceleratorsInput: IResolvable | Ec2InstanceElasticInferenceAccelerators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.enclaveOptionsInput"></a>

```typescript
public readonly enclaveOptionsInput: IResolvable | Ec2InstanceEnclaveOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---

##### `hibernationOptionsInput`<sup>Optional</sup> <a name="hibernationOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hibernationOptionsInput"></a>

```typescript
public readonly hibernationOptionsInput: IResolvable | Ec2InstanceHibernationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `hostResourceGroupArnInput`<sup>Optional</sup> <a name="hostResourceGroupArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArnInput"></a>

```typescript
public readonly hostResourceGroupArnInput: string;
```

- *Type:* string

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehaviorInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehaviorInput"></a>

```typescript
public readonly instanceInitiatedShutdownBehaviorInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: IResolvable | Ec2InstanceIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---

##### `kernelIdInput`<sup>Optional</sup> <a name="kernelIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelIdInput"></a>

```typescript
public readonly kernelIdInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: IResolvable | Ec2InstanceLaunchTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---

##### `licenseSpecificationsInput`<sup>Optional</sup> <a name="licenseSpecificationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.licenseSpecificationsInput"></a>

```typescript
public readonly licenseSpecificationsInput: IResolvable | Ec2InstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: IResolvable | Ec2InstanceMetadataOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | Ec2InstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---

##### `placementGroupNameInput`<sup>Optional</sup> <a name="placementGroupNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupNameInput"></a>

```typescript
public readonly placementGroupNameInput: string;
```

- *Type:* string

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateDnsNameOptionsInput"></a>

```typescript
public readonly privateDnsNameOptionsInput: IResolvable | Ec2InstancePrivateDnsNameOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `propagateTagsToVolumeOnCreationInput`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreationInput"></a>

```typescript
public readonly propagateTagsToVolumeOnCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ramdiskIdInput`<sup>Optional</sup> <a name="ramdiskIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskIdInput"></a>

```typescript
public readonly ramdiskIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `sourceDestCheckInput`<sup>Optional</sup> <a name="sourceDestCheckInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheckInput"></a>

```typescript
public readonly sourceDestCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ssmAssociationsInput`<sup>Optional</sup> <a name="ssmAssociationsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ssmAssociationsInput"></a>

```typescript
public readonly ssmAssociationsInput: IResolvable | Ec2InstanceSsmAssociations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2InstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | Ec2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `placementGroupName`<sup>Required</sup> <a name="placementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.placementGroupName"></a>

```typescript
public readonly placementGroupName: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `propagateTagsToVolumeOnCreation`<sup>Required</sup> <a name="propagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.propagateTagsToVolumeOnCreation"></a>

```typescript
public readonly propagateTagsToVolumeOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ramdiskId`<sup>Required</sup> <a name="ramdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sourceDestCheck`<sup>Required</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Instance.Ec2Instance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceBlockDeviceMappings <a name="Ec2InstanceBlockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceBlockDeviceMappings: ec2Instance.Ec2InstanceBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when the instance is launched. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device_name Ec2Instance#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: Ec2InstanceBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when the instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ebs Ec2Instance#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#no_device Ec2Instance#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#virtual_name Ec2Instance#virtual_name}.

---

### Ec2InstanceBlockDeviceMappingsEbs <a name="Ec2InstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceBlockDeviceMappingsEbs: ec2Instance.Ec2InstanceBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the EBS volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | The number of I/O operations per second (IOPS). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | The ID of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | The volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the EBS volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#encrypted Ec2Instance#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

The number of I/O operations per second (IOPS).

For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#iops Ec2Instance#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The identifier of the AWS Key Management Service (AWS KMS) customer managed CMK to use for Amazon EBS encryption.

If KmsKeyId is specified, the encrypted state must be true. If the encrypted state is true but you do not specify KmsKeyId, your AWS managed CMK for EBS is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#kms_key_id Ec2Instance#kms_key_id}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The ID of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#snapshot_id Ec2Instance#snapshot_id}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

The size of the volume, in GiBs.

You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_size Ec2Instance#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_type Ec2Instance#volume_type}

---

### Ec2InstanceConfig <a name="Ec2InstanceConfig" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceConfig: ec2Instance.Ec2InstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo">additionalInfo</a></code> | <code>string</code> | This property is reserved for internal use. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity">affinity</a></code> | <code>string</code> | Indicates whether the instance is associated with a dedicated host. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | The block device mapping entries that defines the block devices to attach to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | The CPU options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination">disableApiTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API; |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the instance is optimized for Amazon EBS I/O. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | Indicates whether the instance is enabled for AWS Nitro Enclaves. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | Indicates whether an instance is enabled for hibernation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId">hostId</a></code> | <code>string</code> | If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | The ARN of the host resource group in which to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | The IAM instance profile. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId">imageId</a></code> | <code>string</code> | The ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | [EC2-VPC] The number of IPv6 addresses to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses">ipv6Addresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | [EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId">kernelId</a></code> | <code>string</code> | The ID of the kernel. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName">keyName</a></code> | <code>string</code> | The name of the key pair. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | The launch template to use to launch the instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications">licenseSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | The license configurations. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | The metadata options for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring">monitoring</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether detailed monitoring is enabled for the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | The network interfaces to associate with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName">placementGroupName</a></code> | <code>string</code> | The name of an existing placement group that you want to launch the instance into (cluster \| partition \| spread). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | The options for the instance hostname. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | [EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation">propagateTagsToVolumeOnCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId">ramdiskId</a></code> | <code>string</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | the names of the security groups. For a nondefault VPC, you must use security group IDs instead. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck">sourceDestCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable an instance launched in a VPC to perform NAT. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations">ssmAssociations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | The SSM document and parameter values in AWS Systems Manager to associate with this instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId">subnetId</a></code> | <code>string</code> | [EC2-VPC] The ID of the subnet to launch the instance into. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | The tags to add to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy">tenancy</a></code> | <code>string</code> | The tenancy of the instance (if the instance is running in a VPC). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData">userData</a></code> | <code>string</code> | The user data to make available to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | The volumes to attach to the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: string;
```

- *Type:* string

This property is reserved for internal use.

If you use it, the stack fails with this error: Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#additional_info Ec2Instance#additional_info}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

Indicates whether the instance is associated with a dedicated host.

If you want the instance to always restart on the same host on which it was launched, specify host. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#affinity Ec2Instance#affinity}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#availability_zone Ec2Instance#availability_zone}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | Ec2InstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

The block device mapping entries that defines the block devices to attach to the instance at launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#block_device_mappings Ec2Instance#block_device_mappings}

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: Ec2InstanceCpuOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

The CPU options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#cpu_options Ec2Instance#cpu_options}

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: Ec2InstanceCreditSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#credit_specification Ec2Instance#credit_specification}

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you set this parameter to true, you can't terminate the instance using the Amazon EC2 console, CLI, or API;

otherwise, you can.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#disable_api_termination Ec2Instance#disable_api_termination}

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the instance is optimized for Amazon EBS I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ebs_optimized Ec2Instance#ebs_optimized}

---

##### `elasticGpuSpecifications`<sup>Optional</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: IResolvable | Ec2InstanceElasticGpuSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

An elastic GPU to associate with the instance. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#elastic_gpu_specifications Ec2Instance#elastic_gpu_specifications}

---

##### `elasticInferenceAccelerators`<sup>Optional</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.elasticInferenceAccelerators"></a>

```typescript
public readonly elasticInferenceAccelerators: IResolvable | Ec2InstanceElasticInferenceAccelerators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#elastic_inference_accelerators Ec2Instance#elastic_inference_accelerators}

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: Ec2InstanceEnclaveOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

Indicates whether the instance is enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enclave_options Ec2Instance#enclave_options}

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: Ec2InstanceHibernationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

Indicates whether an instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#hibernation_options Ec2Instance#hibernation_options}

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with.

If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#host_id Ec2Instance#host_id}

---

##### `hostResourceGroupArn`<sup>Optional</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

The ARN of the host resource group in which to launch the instances.

If you specify a host resource group ARN, omit the Tenancy parameter or set it to host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#host_resource_group_arn Ec2Instance#host_resource_group_arn}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

The IAM instance profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#iam_instance_profile Ec2Instance#iam_instance_profile}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

The ID of the AMI.

An AMI ID is required to launch an instance and must be specified here or in a launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#image_id Ec2Instance#image_id}

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_initiated_shutdown_behavior Ec2Instance#instance_initiated_shutdown_behavior}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_type Ec2Instance#instance_type}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

[EC2-VPC] The number of IPv6 addresses to associate with the primary network interface.

Amazon EC2 chooses the IPv6 addresses from the range of your subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: IResolvable | Ec2InstanceIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

[EC2-VPC] The IPv6 addresses from the range of the subnet to associate with the primary network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

The ID of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#kernel_id Ec2Instance#kernel_id}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The name of the key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key_name Ec2Instance#key_name}

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: Ec2InstanceLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

The launch template to use to launch the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template Ec2Instance#launch_template}

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: IResolvable | Ec2InstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

The license configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#license_specifications Ec2Instance#license_specifications}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: Ec2InstanceMetadataOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

The metadata options for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#metadata_options Ec2Instance#metadata_options}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether detailed monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#monitoring Ec2Instance#monitoring}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | Ec2InstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

The network interfaces to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#network_interfaces Ec2Instance#network_interfaces}

---

##### `placementGroupName`<sup>Optional</sup> <a name="placementGroupName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.placementGroupName"></a>

```typescript
public readonly placementGroupName: string;
```

- *Type:* string

The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#placement_group_name Ec2Instance#placement_group_name}

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: Ec2InstancePrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

The options for the instance hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_dns_name_options Ec2Instance#private_dns_name_options}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

[EC2-VPC] The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `propagateTagsToVolumeOnCreation`<sup>Optional</sup> <a name="propagateTagsToVolumeOnCreation" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.propagateTagsToVolumeOnCreation"></a>

```typescript
public readonly propagateTagsToVolumeOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch.

If you specify true and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify false, those tags are not assigned to the attached volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#propagate_tags_to_volume_on_creation Ec2Instance#propagate_tags_to_volume_on_creation}

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: string;
```

- *Type:* string

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ramdisk_id Ec2Instance#ramdisk_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The IDs of the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#security_group_ids Ec2Instance#security_group_ids}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

the names of the security groups. For a nondefault VPC, you must use security group IDs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#security_groups Ec2Instance#security_groups}

---

##### `sourceDestCheck`<sup>Optional</sup> <a name="sourceDestCheck" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.sourceDestCheck"></a>

```typescript
public readonly sourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable an instance launched in a VPC to perform NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#source_dest_check Ec2Instance#source_dest_check}

---

##### `ssmAssociations`<sup>Optional</sup> <a name="ssmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.ssmAssociations"></a>

```typescript
public readonly ssmAssociations: IResolvable | Ec2InstanceSsmAssociations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

The SSM document and parameter values in AWS Systems Manager to associate with this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ssm_associations Ec2Instance#ssm_associations}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

[EC2-VPC] The ID of the subnet to launch the instance into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2InstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

The tags to add to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#tags Ec2Instance#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

The tenancy of the instance (if the instance is running in a VPC).

An instance with a tenancy of dedicated runs on single-tenant hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#tenancy Ec2Instance#tenancy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

The user data to make available to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#user_data Ec2Instance#user_data}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceConfig.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | Ec2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

The volumes to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volumes Ec2Instance#volumes}

---

### Ec2InstanceCpuOptions <a name="Ec2InstanceCpuOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceCpuOptions: ec2Instance.Ec2InstanceCpuOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount">coreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#core_count Ec2Instance#core_count}.

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#threads_per_core Ec2Instance#threads_per_core}.

---

### Ec2InstanceCreditSpecification <a name="Ec2InstanceCreditSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceCreditSpecification: ec2Instance.Ec2InstanceCreditSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#cpu_credits Ec2Instance#cpu_credits}.

---

### Ec2InstanceElasticGpuSpecifications <a name="Ec2InstanceElasticGpuSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceElasticGpuSpecifications: ec2Instance.Ec2InstanceElasticGpuSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type">type</a></code> | <code>string</code> | The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of Elastic Graphics accelerator. Amazon Elastic Graphics is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceElasticInferenceAccelerators <a name="Ec2InstanceElasticInferenceAccelerators" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceElasticInferenceAccelerators: ec2Instance.Ec2InstanceElasticInferenceAccelerators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count">count</a></code> | <code>number</code> | The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type">type</a></code> | <code>string</code> | The type of elastic inference accelerator. Amazon Elastic Inference is no longer available. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of elastic inference accelerators to attach to the instance. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#count Ec2Instance#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of elastic inference accelerator. Amazon Elastic Inference is no longer available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#type Ec2Instance#type}

---

### Ec2InstanceEnclaveOptions <a name="Ec2InstanceEnclaveOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceEnclaveOptions: ec2Instance.Ec2InstanceEnclaveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves; |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If this parameter is set to true, the instance is enabled for AWS Nitro Enclaves;

otherwise, it is not enabled for AWS Nitro Enclaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enabled Ec2Instance#enabled}

---

### Ec2InstanceHibernationOptions <a name="Ec2InstanceHibernationOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceHibernationOptions: ec2Instance.Ec2InstanceHibernationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured">configured</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you set this parameter to true, your instance is enabled for hibernation. |

---

##### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you set this parameter to true, your instance is enabled for hibernation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#configured Ec2Instance#configured}

---

### Ec2InstanceIpv6Addresses <a name="Ec2InstanceIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceIpv6Addresses: ec2Instance.Ec2InstanceIpv6Addresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | The IPv6 address. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceLaunchTemplate <a name="Ec2InstanceLaunchTemplate" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceLaunchTemplate: ec2Instance.Ec2InstanceLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version">version</a></code> | <code>string</code> | The version number of the launch template. |

---

##### `launchTemplateId`<sup>Optional</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

The ID of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template_id Ec2Instance#launch_template_id}

---

##### `launchTemplateName`<sup>Optional</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

The name of the launch template. You must specify the LaunchTemplateName or the LaunchTemplateId, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#launch_template_name Ec2Instance#launch_template_name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version number of the launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#version Ec2Instance#version}

---

### Ec2InstanceLicenseSpecifications <a name="Ec2InstanceLicenseSpecifications" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceLicenseSpecifications: ec2Instance.Ec2InstanceLicenseSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the license configuration. |

---

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#license_configuration_arn Ec2Instance#license_configuration_arn}

---

### Ec2InstanceMetadataOptions <a name="Ec2InstanceMetadataOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceMetadataOptions: ec2Instance.Ec2InstanceMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | Enables or disables the IPv6 endpoint for the instance metadata service. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | The number of network hops that the metadata token can travel. Maximum is 64. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Indicates whether IMDSv2 is required. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Indicates whether tags from the instance are propagated to the EBS volumes. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Enables or disables the HTTP metadata endpoint on your instances.

If you specify a value of disabled, you cannot access your instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_endpoint Ec2Instance#http_endpoint}

---

##### `httpProtocolIpv6`<sup>Optional</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

Enables or disables the IPv6 endpoint for the instance metadata service.

To use this option, the instance must be a Nitro-based instance launched in a subnet that supports IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_protocol_ipv_6 Ec2Instance#http_protocol_ipv_6}

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

The number of network hops that the metadata token can travel. Maximum is 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_put_response_hop_limit Ec2Instance#http_put_response_hop_limit}

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Indicates whether IMDSv2 is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#http_tokens Ec2Instance#http_tokens}

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Indicates whether tags from the instance are propagated to the EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#instance_metadata_tags Ec2Instance#instance_metadata_tags}

---

### Ec2InstanceNetworkInterfaces <a name="Ec2InstanceNetworkInterfaces" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceNetworkInterfaces: ec2Instance.Ec2InstanceNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | Not currently supported by AWS CloudFormation. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the interface is deleted when the instance is terminated. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description">description</a></code> | <code>string</code> | The description of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex">deviceIndex</a></code> | <code>string</code> | The position of the network interface in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | Specifies the ENA Express settings for the network interface that's attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet">groupSet</a></code> | <code>string[]</code> | The IDs of the security groups for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | A number of IPv6 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses">ipv6Addresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | The IPv6 addresses associated with the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | The private IPv4 address of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses">privateIpAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | One or more private IPv4 addresses to assign to the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | The number of secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet. |

---

##### `associateCarrierIpAddress`<sup>Optional</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Not currently supported by AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#associate_carrier_ip_address Ec2Instance#associate_carrier_ip_address}

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to assign a public IPv4 address to an instance you launch in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#associate_public_ip_address Ec2Instance#associate_public_ip_address}

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the interface is deleted when the instance is terminated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#delete_on_termination Ec2Instance#delete_on_termination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#description Ec2Instance#description}

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: string;
```

- *Type:* string

The position of the network interface in the attachment order.

A primary network interface has a device index of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device_index Ec2Instance#device_index}

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.enaSrdSpecification"></a>

```typescript
public readonly enaSrdSpecification: Ec2InstanceNetworkInterfacesEnaSrdSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

Specifies the ENA Express settings for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_specification Ec2Instance#ena_srd_specification}

---

##### `groupSet`<sup>Optional</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.groupSet"></a>

```typescript
public readonly groupSet: string[];
```

- *Type:* string[]

The IDs of the security groups for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#group_set Ec2Instance#group_set}

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

A number of IPv6 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address_count Ec2Instance#ipv_6_address_count}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

The IPv6 addresses associated with the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_addresses Ec2Instance#ipv_6_addresses}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#network_interface_id Ec2Instance#network_interface_id}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

The private IPv4 address of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

##### `privateIpAddresses`<sup>Optional</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

One or more private IPv4 addresses to assign to the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_addresses Ec2Instance#private_ip_addresses}

---

##### `secondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

The number of secondary private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#secondary_private_ip_address_count Ec2Instance#secondary_private_ip_address_count}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#subnet_id Ec2Instance#subnet_id}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceNetworkInterfacesEnaSrdSpecification: ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether ENA Express is enabled for the network interface when you launch an instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance. |

---

##### `enaSrdEnabled`<sup>Optional</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled"></a>

```typescript
public readonly enaSrdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether ENA Express is enabled for the network interface when you launch an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_enabled Ec2Instance#ena_srd_enabled}

---

##### `enaSrdUdpSpecification`<sup>Optional</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```typescript
public readonly enaSrdUdpSpecification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

Contains ENA Express settings for UDP network traffic for the network interface that's attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_udp_specification Ec2Instance#ena_srd_udp_specification}

---

### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification: ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether UDP traffic uses ENA Express for your instance. |

---

##### `enaSrdUdpEnabled`<sup>Optional</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```typescript
public readonly enaSrdUdpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether UDP traffic uses ENA Express for your instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ena_srd_udp_enabled Ec2Instance#ena_srd_udp_enabled}

---

### Ec2InstanceNetworkInterfacesIpv6Addresses <a name="Ec2InstanceNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceNetworkInterfacesIpv6Addresses: ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | The IPv6 address. |

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

The IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#ipv_6_address Ec2Instance#ipv_6_address}

---

### Ec2InstanceNetworkInterfacesPrivateIpAddresses <a name="Ec2InstanceNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceNetworkInterfacesPrivateIpAddresses: ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the private IPv4 address is the primary private IPv4 address. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | The private IPv4 addresses. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the private IPv4 address is the primary private IPv4 address.

Only one IPv4 address can be designated as primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#primary Ec2Instance#primary}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

The private IPv4 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#private_ip_address Ec2Instance#private_ip_address}

---

### Ec2InstancePrivateDnsNameOptions <a name="Ec2InstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstancePrivateDnsNameOptions: ec2Instance.Ec2InstancePrivateDnsNameOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to respond to DNS queries for instance hostnames with DNS A records. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>string</code> | The type of hostnames to assign to instances in the subnet at launch. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enable_resource_name_dns_aaaa_record Ec2Instance#enable_resource_name_dns_aaaa_record}

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to respond to DNS queries for instance hostnames with DNS A records.

For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#enable_resource_name_dns_a_record Ec2Instance#enable_resource_name_dns_a_record}

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

The type of hostnames to assign to instances in the subnet at launch.

For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see Amazon EC2 instance hostname types in the Amazon Elastic Compute Cloud User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#hostname_type Ec2Instance#hostname_type}

---

### Ec2InstanceSsmAssociations <a name="Ec2InstanceSsmAssociations" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceSsmAssociations: ec2Instance.Ec2InstanceSsmAssociations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters">associationParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | The input parameter values to use with the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName">documentName</a></code> | <code>string</code> | The name of an SSM document to associate with the instance. |

---

##### `associationParameters`<sup>Optional</sup> <a name="associationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.associationParameters"></a>

```typescript
public readonly associationParameters: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

The input parameter values to use with the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#association_parameters Ec2Instance#association_parameters}

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

The name of an SSM document to associate with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#document_name Ec2Instance#document_name}

---

### Ec2InstanceSsmAssociationsAssociationParameters <a name="Ec2InstanceSsmAssociationsAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceSsmAssociationsAssociationParameters: ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key">key</a></code> | <code>string</code> | The name of an input parameter that is in the associated SSM document. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value">value</a></code> | <code>string[]</code> | The value of an input parameter. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of an input parameter that is in the associated SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key Ec2Instance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

The value of an input parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#value Ec2Instance#value}

---

### Ec2InstanceState <a name="Ec2InstanceState" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceState.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceState: ec2Instance.Ec2InstanceState = { ... }
```


### Ec2InstanceTags <a name="Ec2InstanceTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceTags: ec2Instance.Ec2InstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key Ec2Instance#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#value Ec2Instance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#key Ec2Instance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#value Ec2Instance#value}.

---

### Ec2InstanceVolumes <a name="Ec2InstanceVolumes" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

const ec2InstanceVolumes: ec2Instance.Ec2InstanceVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device">device</a></code> | <code>string</code> | The device name (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId">volumeId</a></code> | <code>string</code> | The ID of the EBS volume. The volume and instance must be within the same Availability Zone. |

---

##### `device`<sup>Optional</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

The device name (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#device Ec2Instance#device}

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The ID of the EBS volume. The volume and instance must be within the same Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_instance#volume_id Ec2Instance#volume_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceBlockDeviceMappingsEbsOutputReference <a name="Ec2InstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---


### Ec2InstanceBlockDeviceMappingsList <a name="Ec2InstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): Ec2InstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>[]

---


### Ec2InstanceBlockDeviceMappingsOutputReference <a name="Ec2InstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: Ec2InstanceBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: Ec2InstanceBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbsOutputReference">Ec2InstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: IResolvable | Ec2InstanceBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsEbs">Ec2InstanceBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceBlockDeviceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceBlockDeviceMappings">Ec2InstanceBlockDeviceMappings</a>

---


### Ec2InstanceCpuOptionsOutputReference <a name="Ec2InstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceCpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceCpuOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCpuOptions">Ec2InstanceCpuOptions</a>

---


### Ec2InstanceCreditSpecificationOutputReference <a name="Ec2InstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```typescript
public resetCpuCredits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceCreditSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceCreditSpecification">Ec2InstanceCreditSpecification</a>

---


### Ec2InstanceElasticGpuSpecificationsList <a name="Ec2InstanceElasticGpuSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceElasticGpuSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get"></a>

```typescript
public get(index: number): Ec2InstanceElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceElasticGpuSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>[]

---


### Ec2InstanceElasticGpuSpecificationsOutputReference <a name="Ec2InstanceElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceElasticGpuSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticGpuSpecifications">Ec2InstanceElasticGpuSpecifications</a>

---


### Ec2InstanceElasticInferenceAcceleratorsList <a name="Ec2InstanceElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get"></a>

```typescript
public get(index: number): Ec2InstanceElasticInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceElasticInferenceAccelerators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>[]

---


### Ec2InstanceElasticInferenceAcceleratorsOutputReference <a name="Ec2InstanceElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceElasticInferenceAccelerators;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceElasticInferenceAccelerators">Ec2InstanceElasticInferenceAccelerators</a>

---


### Ec2InstanceEnclaveOptionsOutputReference <a name="Ec2InstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceEnclaveOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceEnclaveOptions">Ec2InstanceEnclaveOptions</a>

---


### Ec2InstanceHibernationOptionsOutputReference <a name="Ec2InstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceHibernationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured">resetConfigured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigured` <a name="resetConfigured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.resetConfigured"></a>

```typescript
public resetConfigured(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput">configuredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredInput`<sup>Optional</sup> <a name="configuredInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```typescript
public readonly configuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceHibernationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceHibernationOptions">Ec2InstanceHibernationOptions</a>

---


### Ec2InstanceIpv6AddressesList <a name="Ec2InstanceIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceIpv6AddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get"></a>

```typescript
public get(index: number): Ec2InstanceIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>[]

---


### Ec2InstanceIpv6AddressesOutputReference <a name="Ec2InstanceIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceIpv6AddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6AddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceIpv6Addresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceIpv6Addresses">Ec2InstanceIpv6Addresses</a>

---


### Ec2InstanceLaunchTemplateOutputReference <a name="Ec2InstanceLaunchTemplateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId">resetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName">resetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLaunchTemplateId` <a name="resetLaunchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```typescript
public resetLaunchTemplateId(): void
```

##### `resetLaunchTemplateName` <a name="resetLaunchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```typescript
public resetLaunchTemplateName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput">launchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput">launchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchTemplateIdInput`<sup>Optional</sup> <a name="launchTemplateIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```typescript
public readonly launchTemplateIdInput: string;
```

- *Type:* string

---

##### `launchTemplateNameInput`<sup>Optional</sup> <a name="launchTemplateNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```typescript
public readonly launchTemplateNameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceLaunchTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLaunchTemplate">Ec2InstanceLaunchTemplate</a>

---


### Ec2InstanceLicenseSpecificationsList <a name="Ec2InstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceLicenseSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get"></a>

```typescript
public get(index: number): Ec2InstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>[]

---


### Ec2InstanceLicenseSpecificationsOutputReference <a name="Ec2InstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">resetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLicenseConfigurationArn` <a name="resetLicenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```typescript
public resetLicenseConfigurationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">licenseConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArnInput`<sup>Optional</sup> <a name="licenseConfigurationArnInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```typescript
public readonly licenseConfigurationArnInput: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceLicenseSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceLicenseSpecifications">Ec2InstanceLicenseSpecifications</a>

---


### Ec2InstanceMetadataOptionsOutputReference <a name="Ec2InstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">resetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpProtocolIpv6` <a name="resetHttpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```typescript
public resetHttpProtocolIpv6(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">httpProtocolIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpProtocolIpv6Input`<sup>Optional</sup> <a name="httpProtocolIpv6Input" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```typescript
public readonly httpProtocolIpv6Input: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceMetadataOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceMetadataOptions">Ec2InstanceMetadataOptions</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">resetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnaSrdUdpEnabled` <a name="resetEnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```typescript
public resetEnaSrdUdpEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">enaSrdUdpEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enaSrdUdpEnabledInput`<sup>Optional</sup> <a name="enaSrdUdpEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```typescript
public readonly enaSrdUdpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```typescript
public readonly enaSrdUdpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference <a name="Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">putEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">resetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">resetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdUdpSpecification` <a name="putEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```typescript
public putEnaSrdUdpSpecification(value: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `resetEnaSrdEnabled` <a name="resetEnaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```typescript
public resetEnaSrdEnabled(): void
```

##### `resetEnaSrdUdpSpecification` <a name="resetEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```typescript
public resetEnaSrdUdpSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">enaSrdEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">enaSrdUdpSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```typescript
public readonly enaSrdUdpSpecification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `enaSrdEnabledInput`<sup>Optional</sup> <a name="enaSrdEnabledInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```typescript
public readonly enaSrdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="enaSrdUdpSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```typescript
public readonly enaSrdUdpSpecificationInput: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```typescript
public readonly enaSrdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---


### Ec2InstanceNetworkInterfacesIpv6AddressesList <a name="Ec2InstanceNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get"></a>

```typescript
public get(index: number): Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---


### Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference <a name="Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>

---


### Ec2InstanceNetworkInterfacesList <a name="Ec2InstanceNetworkInterfacesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get"></a>

```typescript
public get(index: number): Ec2InstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>[]

---


### Ec2InstanceNetworkInterfacesOutputReference <a name="Ec2InstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification">putEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses">putIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses">putPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">resetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification">resetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet">resetGroupSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses">resetPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount">resetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdSpecification` <a name="putEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification"></a>

```typescript
public putEnaSrdSpecification(value: Ec2InstanceNetworkInterfacesEnaSrdSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `putIpv6Addresses` <a name="putIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses"></a>

```typescript
public putIpv6Addresses(value: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putIpv6Addresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---

##### `putPrivateIpAddresses` <a name="putPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses"></a>

```typescript
public putPrivateIpAddresses(value: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.putPrivateIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `resetAssociateCarrierIpAddress` <a name="resetAssociateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```typescript
public resetAssociateCarrierIpAddress(): void
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```typescript
public resetDeviceIndex(): void
```

##### `resetEnaSrdSpecification` <a name="resetEnaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetEnaSrdSpecification"></a>

```typescript
public resetEnaSrdSpecification(): void
```

##### `resetGroupSet` <a name="resetGroupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetGroupSet"></a>

```typescript
public resetGroupSet(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetPrivateIpAddresses` <a name="resetPrivateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetPrivateIpAddresses"></a>

```typescript
public resetPrivateIpAddresses(): void
```

##### `resetSecondaryPrivateIpAddressCount` <a name="resetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSecondaryPrivateIpAddressCount"></a>

```typescript
public resetSecondaryPrivateIpAddressCount(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">associateCarrierIpAddressInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput">enaSrdSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput">groupSetInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput">privateIpAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput">secondaryPrivateIpAddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet">groupSet</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```typescript
public readonly enaSrdSpecification: Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference">Ec2InstanceNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: Ec2InstanceNetworkInterfacesIpv6AddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6AddressesList">Ec2InstanceNetworkInterfacesIpv6AddressesList</a>

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: Ec2InstanceNetworkInterfacesPrivateIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList">Ec2InstanceNetworkInterfacesPrivateIpAddressesList</a>

---

##### `associateCarrierIpAddressInput`<sup>Optional</sup> <a name="associateCarrierIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```typescript
public readonly associateCarrierIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: string;
```

- *Type:* string

---

##### `enaSrdSpecificationInput`<sup>Optional</sup> <a name="enaSrdSpecificationInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.enaSrdSpecificationInput"></a>

```typescript
public readonly enaSrdSpecificationInput: IResolvable | Ec2InstanceNetworkInterfacesEnaSrdSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesEnaSrdSpecification">Ec2InstanceNetworkInterfacesEnaSrdSpecification</a>

---

##### `groupSetInput`<sup>Optional</sup> <a name="groupSetInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSetInput"></a>

```typescript
public readonly groupSetInput: string[];
```

- *Type:* string[]

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: IResolvable | Ec2InstanceNetworkInterfacesIpv6Addresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesIpv6Addresses">Ec2InstanceNetworkInterfacesIpv6Addresses</a>[]

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressesInput`<sup>Optional</sup> <a name="privateIpAddressesInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressesInput"></a>

```typescript
public readonly privateIpAddressesInput: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `secondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCountInput"></a>

```typescript
public readonly secondaryPrivateIpAddressCountInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: string;
```

- *Type:* string

---

##### `groupSet`<sup>Required</sup> <a name="groupSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.groupSet"></a>

```typescript
public readonly groupSet: string[];
```

- *Type:* string[]

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfaces">Ec2InstanceNetworkInterfaces</a>

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesList <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get"></a>

```typescript
public get(index: number): Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>[]

---


### Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference <a name="Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceNetworkInterfacesPrivateIpAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceNetworkInterfacesPrivateIpAddresses">Ec2InstanceNetworkInterfacesPrivateIpAddresses</a>

---


### Ec2InstancePrivateDnsNameOptionsOutputReference <a name="Ec2InstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```typescript
public resetEnableResourceNameDnsAaaaRecord(): void
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```typescript
public resetEnableResourceNameDnsARecord(): void
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```typescript
public resetHostnameType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```typescript
public readonly enableResourceNameDnsARecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```typescript
public readonly hostnameTypeInput: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstancePrivateDnsNameOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstancePrivateDnsNameOptions">Ec2InstancePrivateDnsNameOptions</a>

---


### Ec2InstanceSsmAssociationsAssociationParametersList <a name="Ec2InstanceSsmAssociationsAssociationParametersList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get"></a>

```typescript
public get(index: number): Ec2InstanceSsmAssociationsAssociationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---


### Ec2InstanceSsmAssociationsAssociationParametersOutputReference <a name="Ec2InstanceSsmAssociationsAssociationParametersOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>

---


### Ec2InstanceSsmAssociationsList <a name="Ec2InstanceSsmAssociationsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceSsmAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get"></a>

```typescript
public get(index: number): Ec2InstanceSsmAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceSsmAssociations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>[]

---


### Ec2InstanceSsmAssociationsOutputReference <a name="Ec2InstanceSsmAssociationsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceSsmAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters">putAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters">resetAssociationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName">resetDocumentName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociationParameters` <a name="putAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters"></a>

```typescript
public putAssociationParameters(value: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.putAssociationParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---

##### `resetAssociationParameters` <a name="resetAssociationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetAssociationParameters"></a>

```typescript
public resetAssociationParameters(): void
```

##### `resetDocumentName` <a name="resetDocumentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.resetDocumentName"></a>

```typescript
public resetDocumentName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters">associationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput">associationParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput">documentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationParameters`<sup>Required</sup> <a name="associationParameters" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParameters"></a>

```typescript
public readonly associationParameters: Ec2InstanceSsmAssociationsAssociationParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParametersList">Ec2InstanceSsmAssociationsAssociationParametersList</a>

---

##### `associationParametersInput`<sup>Optional</sup> <a name="associationParametersInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.associationParametersInput"></a>

```typescript
public readonly associationParametersInput: IResolvable | Ec2InstanceSsmAssociationsAssociationParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsAssociationParameters">Ec2InstanceSsmAssociationsAssociationParameters</a>[]

---

##### `documentNameInput`<sup>Optional</sup> <a name="documentNameInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentNameInput"></a>

```typescript
public readonly documentNameInput: string;
```

- *Type:* string

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceSsmAssociations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceSsmAssociations">Ec2InstanceSsmAssociations</a>

---


### Ec2InstanceStateOutputReference <a name="Ec2InstanceStateOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2InstanceState;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceState">Ec2InstanceState</a>

---


### Ec2InstanceTagsList <a name="Ec2InstanceTagsList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get"></a>

```typescript
public get(index: number): Ec2InstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>[]

---


### Ec2InstanceTagsOutputReference <a name="Ec2InstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceTags">Ec2InstanceTags</a>

---


### Ec2InstanceVolumesList <a name="Ec2InstanceVolumesList" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get"></a>

```typescript
public get(index: number): Ec2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceVolumes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>[]

---


### Ec2InstanceVolumesOutputReference <a name="Ec2InstanceVolumesOutputReference" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer"></a>

```typescript
import { ec2Instance } from '@cdktn/provider-awscc'

new ec2Instance.Ec2InstanceVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevice` <a name="resetDevice" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetVolumeId` <a name="resetVolumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.resetVolumeId"></a>

```typescript
public resetVolumeId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2InstanceVolumes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Instance.Ec2InstanceVolumes">Ec2InstanceVolumes</a>

---



