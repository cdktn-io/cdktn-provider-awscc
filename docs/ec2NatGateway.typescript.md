# `ec2NatGateway` Submodule <a name="`ec2NatGateway` Submodule" id="@cdktn/provider-awscc.ec2NatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NatGateway <a name="Ec2NatGateway" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

new ec2NatGateway.Ec2NatGateway(scope: Construct, id: string, config?: Ec2NatGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig">Ec2NatGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig">Ec2NatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses">putAvailabilityZoneAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode">resetAvailabilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses">resetAvailabilityZoneAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType">resetConnectivityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds">resetMaxDrainDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds">resetSecondaryAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount">resetSecondaryPrivateIpAddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses">resetSecondaryPrivateIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityZoneAddresses` <a name="putAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses"></a>

```typescript
public putAvailabilityZoneAddresses(value: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putAvailabilityZoneAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2NatGatewayTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAllocationId"></a>

```typescript
public resetAllocationId(): void
```

##### `resetAvailabilityMode` <a name="resetAvailabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityMode"></a>

```typescript
public resetAvailabilityMode(): void
```

##### `resetAvailabilityZoneAddresses` <a name="resetAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetAvailabilityZoneAddresses"></a>

```typescript
public resetAvailabilityZoneAddresses(): void
```

##### `resetConnectivityType` <a name="resetConnectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetConnectivityType"></a>

```typescript
public resetConnectivityType(): void
```

##### `resetMaxDrainDurationSeconds` <a name="resetMaxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetMaxDrainDurationSeconds"></a>

```typescript
public resetMaxDrainDurationSeconds(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetSecondaryAllocationIds` <a name="resetSecondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryAllocationIds"></a>

```typescript
public resetSecondaryAllocationIds(): void
```

##### `resetSecondaryPrivateIpAddressCount` <a name="resetSecondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddressCount"></a>

```typescript
public resetSecondaryPrivateIpAddressCount(): void
```

##### `resetSecondaryPrivateIpAddresses` <a name="resetSecondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSecondaryPrivateIpAddresses"></a>

```typescript
public resetSecondaryPrivateIpAddresses(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

ec2NatGateway.Ec2NatGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

ec2NatGateway.Ec2NatGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

ec2NatGateway.Ec2NatGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

ec2NatGateway.Ec2NatGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2NatGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones">autoProvisionZones</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps">autoScalingIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses">availabilityZoneAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId">eniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput">allocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput">availabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput">availabilityZoneAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput">connectivityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput">maxDrainDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput">secondaryAllocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput">secondaryPrivateIpAddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput">secondaryPrivateIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId">allocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode">availabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType">connectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds">maxDrainDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds">secondaryAllocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses">secondaryPrivateIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoProvisionZones`<sup>Required</sup> <a name="autoProvisionZones" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoProvisionZones"></a>

```typescript
public readonly autoProvisionZones: string;
```

- *Type:* string

---

##### `autoScalingIps`<sup>Required</sup> <a name="autoScalingIps" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.autoScalingIps"></a>

```typescript
public readonly autoScalingIps: string;
```

- *Type:* string

---

##### `availabilityZoneAddresses`<sup>Required</sup> <a name="availabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddresses"></a>

```typescript
public readonly availabilityZoneAddresses: Ec2NatGatewayAvailabilityZoneAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList">Ec2NatGatewayAvailabilityZoneAddressesList</a>

---

##### `eniId`<sup>Required</sup> <a name="eniId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.eniId"></a>

```typescript
public readonly eniId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tags"></a>

```typescript
public readonly tags: Ec2NatGatewayTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList">Ec2NatGatewayTagsList</a>

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationIdInput"></a>

```typescript
public readonly allocationIdInput: string;
```

- *Type:* string

---

##### `availabilityModeInput`<sup>Optional</sup> <a name="availabilityModeInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityModeInput"></a>

```typescript
public readonly availabilityModeInput: string;
```

- *Type:* string

---

##### `availabilityZoneAddressesInput`<sup>Optional</sup> <a name="availabilityZoneAddressesInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityZoneAddressesInput"></a>

```typescript
public readonly availabilityZoneAddressesInput: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---

##### `connectivityTypeInput`<sup>Optional</sup> <a name="connectivityTypeInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityTypeInput"></a>

```typescript
public readonly connectivityTypeInput: string;
```

- *Type:* string

---

##### `maxDrainDurationSecondsInput`<sup>Optional</sup> <a name="maxDrainDurationSecondsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSecondsInput"></a>

```typescript
public readonly maxDrainDurationSecondsInput: number;
```

- *Type:* number

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `secondaryAllocationIdsInput`<sup>Optional</sup> <a name="secondaryAllocationIdsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIdsInput"></a>

```typescript
public readonly secondaryAllocationIdsInput: string[];
```

- *Type:* string[]

---

##### `secondaryPrivateIpAddressCountInput`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCountInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCountInput"></a>

```typescript
public readonly secondaryPrivateIpAddressCountInput: number;
```

- *Type:* number

---

##### `secondaryPrivateIpAddressesInput`<sup>Optional</sup> <a name="secondaryPrivateIpAddressesInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressesInput"></a>

```typescript
public readonly secondaryPrivateIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2NatGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

---

##### `availabilityMode`<sup>Required</sup> <a name="availabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.availabilityMode"></a>

```typescript
public readonly availabilityMode: string;
```

- *Type:* string

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.connectivityType"></a>

```typescript
public readonly connectivityType: string;
```

- *Type:* string

---

##### `maxDrainDurationSeconds`<sup>Required</sup> <a name="maxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.maxDrainDurationSeconds"></a>

```typescript
public readonly maxDrainDurationSeconds: number;
```

- *Type:* number

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `secondaryAllocationIds`<sup>Required</sup> <a name="secondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryAllocationIds"></a>

```typescript
public readonly secondaryAllocationIds: string[];
```

- *Type:* string[]

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

---

##### `secondaryPrivateIpAddresses`<sup>Required</sup> <a name="secondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.secondaryPrivateIpAddresses"></a>

```typescript
public readonly secondaryPrivateIpAddresses: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NatGatewayAvailabilityZoneAddresses <a name="Ec2NatGatewayAvailabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

const ec2NatGatewayAvailabilityZoneAddresses: ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds">allocationIds</a></code> | <code>string[]</code> | The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. |

---

##### `allocationIds`<sup>Optional</sup> <a name="allocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.allocationIds"></a>

```typescript
public readonly allocationIds: string[];
```

- *Type:* string[]

The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#allocation_ids Ec2NatGateway#allocation_ids}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. 
 A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#availability_zone Ec2NatGateway#availability_zone}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active.

Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across AWS Regions. 
 A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#availability_zone_id Ec2NatGateway#availability_zone_id}

---

### Ec2NatGatewayConfig <a name="Ec2NatGatewayConfig" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

const ec2NatGatewayConfig: ec2NatGateway.Ec2NatGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId">allocationId</a></code> | <code>string</code> | [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode">availabilityMode</a></code> | <code>string</code> | Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses">availabilityZoneAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType">connectivityType</a></code> | <code>string</code> | Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds">maxDrainDurationSeconds</a></code> | <code>number</code> | The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | The private IPv4 address to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds">secondaryAllocationIds</a></code> | <code>string[]</code> | Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses">secondaryPrivateIpAddresses</a></code> | <code>string[]</code> | Secondary private IPv4 addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet in which the NAT gateway is located. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | The tags for the NAT gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC in which the NAT gateway is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

[Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway.

This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#allocation_id Ec2NatGateway#allocation_id}

---

##### `availabilityMode`<sup>Optional</sup> <a name="availabilityMode" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityMode"></a>

```typescript
public readonly availabilityMode: string;
```

- *Type:* string

Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.

A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
 For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#availability_mode Ec2NatGateway#availability_mode}

---

##### `availabilityZoneAddresses`<sup>Optional</sup> <a name="availabilityZoneAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.availabilityZoneAddresses"></a>

```typescript
public readonly availabilityZoneAddresses: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ.

The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
 A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
 For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#availability_zone_addresses Ec2NatGateway#availability_zone_addresses}

---

##### `connectivityType`<sup>Optional</sup> <a name="connectivityType" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.connectivityType"></a>

```typescript
public readonly connectivityType: string;
```

- *Type:* string

Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#connectivity_type Ec2NatGateway#connectivity_type}

---

##### `maxDrainDurationSeconds`<sup>Optional</sup> <a name="maxDrainDurationSeconds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.maxDrainDurationSeconds"></a>

```typescript
public readonly maxDrainDurationSeconds: number;
```

- *Type:* number

The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress.

Default value is 350 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds Ec2NatGateway#max_drain_duration_seconds}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

The private IPv4 address to assign to the NAT gateway.

If you don't provide an address, a private IPv4 address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#private_ip_address Ec2NatGateway#private_ip_address}

---

##### `secondaryAllocationIds`<sup>Optional</sup> <a name="secondaryAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryAllocationIds"></a>

```typescript
public readonly secondaryAllocationIds: string[];
```

- *Type:* string[]

Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids Ec2NatGateway#secondary_allocation_ids}

---

##### `secondaryPrivateIpAddressCount`<sup>Optional</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

[Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
 ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count Ec2NatGateway#secondary_private_ip_address_count}

---

##### `secondaryPrivateIpAddresses`<sup>Optional</sup> <a name="secondaryPrivateIpAddresses" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.secondaryPrivateIpAddresses"></a>

```typescript
public readonly secondaryPrivateIpAddresses: string[];
```

- *Type:* string[]

Secondary private IPv4 addresses.

For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
 ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses Ec2NatGateway#secondary_private_ip_addresses}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#subnet_id Ec2NatGateway#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2NatGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

The tags for the NAT gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#tags Ec2NatGateway#tags}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC in which the NAT gateway is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#vpc_id Ec2NatGateway#vpc_id}

---

### Ec2NatGatewayTags <a name="Ec2NatGatewayTags" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

const ec2NatGatewayTags: ec2NatGateway.Ec2NatGatewayTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#key Ec2NatGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_nat_gateway#value Ec2NatGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NatGatewayAvailabilityZoneAddressesList <a name="Ec2NatGatewayAvailabilityZoneAddressesList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

new ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get"></a>

```typescript
public get(index: number): Ec2NatGatewayAvailabilityZoneAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>[]

---


### Ec2NatGatewayAvailabilityZoneAddressesOutputReference <a name="Ec2NatGatewayAvailabilityZoneAddressesOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

new ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds">resetAllocationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationIds` <a name="resetAllocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAllocationIds"></a>

```typescript
public resetAllocationIds(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.resetAvailabilityZoneId"></a>

```typescript
public resetAvailabilityZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput">allocationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds">allocationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationIdsInput`<sup>Optional</sup> <a name="allocationIdsInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIdsInput"></a>

```typescript
public readonly allocationIdsInput: string[];
```

- *Type:* string[]

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `allocationIds`<sup>Required</sup> <a name="allocationIds" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.allocationIds"></a>

```typescript
public readonly allocationIds: string[];
```

- *Type:* string[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NatGatewayAvailabilityZoneAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayAvailabilityZoneAddresses">Ec2NatGatewayAvailabilityZoneAddresses</a>

---


### Ec2NatGatewayTagsList <a name="Ec2NatGatewayTagsList" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

new ec2NatGateway.Ec2NatGatewayTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get"></a>

```typescript
public get(index: number): Ec2NatGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NatGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>[]

---


### Ec2NatGatewayTagsOutputReference <a name="Ec2NatGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer"></a>

```typescript
import { ec2NatGateway } from '@cdktn/provider-awscc'

new ec2NatGateway.Ec2NatGatewayTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NatGatewayTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2NatGateway.Ec2NatGatewayTags">Ec2NatGatewayTags</a>

---



