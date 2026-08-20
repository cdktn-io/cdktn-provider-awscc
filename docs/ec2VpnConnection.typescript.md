# `ec2VpnConnection` Submodule <a name="`ec2VpnConnection` Submodule" id="@cdktn/provider-awscc.ec2VpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpnConnection <a name="Ec2VpnConnection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection awscc_ec2_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnection(scope: Construct, id: string, config: Ec2VpnConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig">Ec2VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications">putVpnTunnelOptionsSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration">resetEnableAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr">resetLocalIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr">resetLocalIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType">resetOutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage">resetPreSharedKeyStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr">resetRemoteIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr">resetRemoteIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly">resetStaticRoutesOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId">resetTransportTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth">resetTunnelBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion">resetTunnelInsideIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId">resetVpnConcentratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId">resetVpnGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications">resetVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VpnConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---

##### `putVpnTunnelOptionsSpecifications` <a name="putVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications"></a>

```typescript
public putVpnTunnelOptionsSpecifications(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.putVpnTunnelOptionsSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---

##### `resetEnableAcceleration` <a name="resetEnableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetEnableAcceleration"></a>

```typescript
public resetEnableAcceleration(): void
```

##### `resetLocalIpv4NetworkCidr` <a name="resetLocalIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv4NetworkCidr"></a>

```typescript
public resetLocalIpv4NetworkCidr(): void
```

##### `resetLocalIpv6NetworkCidr` <a name="resetLocalIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetLocalIpv6NetworkCidr"></a>

```typescript
public resetLocalIpv6NetworkCidr(): void
```

##### `resetOutsideIpAddressType` <a name="resetOutsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetOutsideIpAddressType"></a>

```typescript
public resetOutsideIpAddressType(): void
```

##### `resetPreSharedKeyStorage` <a name="resetPreSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetPreSharedKeyStorage"></a>

```typescript
public resetPreSharedKeyStorage(): void
```

##### `resetRemoteIpv4NetworkCidr` <a name="resetRemoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```typescript
public resetRemoteIpv4NetworkCidr(): void
```

##### `resetRemoteIpv6NetworkCidr` <a name="resetRemoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```typescript
public resetRemoteIpv6NetworkCidr(): void
```

##### `resetStaticRoutesOnly` <a name="resetStaticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetStaticRoutesOnly"></a>

```typescript
public resetStaticRoutesOnly(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetTransportTransitGatewayAttachmentId` <a name="resetTransportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```typescript
public resetTransportTransitGatewayAttachmentId(): void
```

##### `resetTunnelBandwidth` <a name="resetTunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelBandwidth"></a>

```typescript
public resetTunnelBandwidth(): void
```

##### `resetTunnelInsideIpVersion` <a name="resetTunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetTunnelInsideIpVersion"></a>

```typescript
public resetTunnelInsideIpVersion(): void
```

##### `resetVpnConcentratorId` <a name="resetVpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnConcentratorId"></a>

```typescript
public resetVpnConcentratorId(): void
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnGatewayId"></a>

```typescript
public resetVpnGatewayId(): void
```

##### `resetVpnTunnelOptionsSpecifications` <a name="resetVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.resetVpnTunnelOptionsSpecifications"></a>

```typescript
public resetVpnTunnelOptionsSpecifications(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

ec2VpnConnection.Ec2VpnConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

ec2VpnConnection.Ec2VpnConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

ec2VpnConnection.Ec2VpnConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

ec2VpnConnection.Ec2VpnConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpnConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications">vpnTunnelOptionsSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput">customerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput">enableAccelerationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput">localIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput">localIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput">outsideIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput">preSharedKeyStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput">remoteIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput">remoteIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput">staticRoutesOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput">transportTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput">tunnelBandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput">tunnelInsideIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput">vpnConcentratorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput">vpnTunnelOptionsSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage">preSharedKeyStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth">tunnelBandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId">vpnConcentratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tags"></a>

```typescript
public readonly tags: Ec2VpnConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList">Ec2VpnConnectionTagsList</a>

---

##### `vpnConnectionId`<sup>Required</sup> <a name="vpnConnectionId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

---

##### `vpnTunnelOptionsSpecifications`<sup>Required</sup> <a name="vpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecifications"></a>

```typescript
public readonly vpnTunnelOptionsSpecifications: Ec2VpnConnectionVpnTunnelOptionsSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsList</a>

---

##### `customerGatewayIdInput`<sup>Optional</sup> <a name="customerGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayIdInput"></a>

```typescript
public readonly customerGatewayIdInput: string;
```

- *Type:* string

---

##### `enableAccelerationInput`<sup>Optional</sup> <a name="enableAccelerationInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAccelerationInput"></a>

```typescript
public readonly enableAccelerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localIpv4NetworkCidrInput`<sup>Optional</sup> <a name="localIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidrInput"></a>

```typescript
public readonly localIpv4NetworkCidrInput: string;
```

- *Type:* string

---

##### `localIpv6NetworkCidrInput`<sup>Optional</sup> <a name="localIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidrInput"></a>

```typescript
public readonly localIpv6NetworkCidrInput: string;
```

- *Type:* string

---

##### `outsideIpAddressTypeInput`<sup>Optional</sup> <a name="outsideIpAddressTypeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressTypeInput"></a>

```typescript
public readonly outsideIpAddressTypeInput: string;
```

- *Type:* string

---

##### `preSharedKeyStorageInput`<sup>Optional</sup> <a name="preSharedKeyStorageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorageInput"></a>

```typescript
public readonly preSharedKeyStorageInput: string;
```

- *Type:* string

---

##### `remoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv4NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```typescript
public readonly remoteIpv4NetworkCidrInput: string;
```

- *Type:* string

---

##### `remoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv6NetworkCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```typescript
public readonly remoteIpv6NetworkCidrInput: string;
```

- *Type:* string

---

##### `staticRoutesOnlyInput`<sup>Optional</sup> <a name="staticRoutesOnlyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnlyInput"></a>

```typescript
public readonly staticRoutesOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VpnConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `transportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly transportTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `tunnelBandwidthInput`<sup>Optional</sup> <a name="tunnelBandwidthInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidthInput"></a>

```typescript
public readonly tunnelBandwidthInput: string;
```

- *Type:* string

---

##### `tunnelInsideIpVersionInput`<sup>Optional</sup> <a name="tunnelInsideIpVersionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersionInput"></a>

```typescript
public readonly tunnelInsideIpVersionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpnConcentratorIdInput`<sup>Optional</sup> <a name="vpnConcentratorIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorIdInput"></a>

```typescript
public readonly vpnConcentratorIdInput: string;
```

- *Type:* string

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `vpnTunnelOptionsSpecificationsInput`<sup>Optional</sup> <a name="vpnTunnelOptionsSpecificationsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnTunnelOptionsSpecificationsInput"></a>

```typescript
public readonly vpnTunnelOptionsSpecificationsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

---

##### `enableAcceleration`<sup>Required</sup> <a name="enableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localIpv4NetworkCidr`<sup>Required</sup> <a name="localIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `localIpv6NetworkCidr`<sup>Required</sup> <a name="localIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.localIpv6NetworkCidr"></a>

```typescript
public readonly localIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `outsideIpAddressType`<sup>Required</sup> <a name="outsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: string;
```

- *Type:* string

---

##### `preSharedKeyStorage`<sup>Required</sup> <a name="preSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.preSharedKeyStorage"></a>

```typescript
public readonly preSharedKeyStorage: string;
```

- *Type:* string

---

##### `remoteIpv4NetworkCidr`<sup>Required</sup> <a name="remoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string

---

##### `remoteIpv6NetworkCidr`<sup>Required</sup> <a name="remoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.remoteIpv6NetworkCidr"></a>

```typescript
public readonly remoteIpv6NetworkCidr: string;
```

- *Type:* string

---

##### `staticRoutesOnly`<sup>Required</sup> <a name="staticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transportTransitGatewayAttachmentId`<sup>Required</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```typescript
public readonly transportTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `tunnelBandwidth`<sup>Required</sup> <a name="tunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelBandwidth"></a>

```typescript
public readonly tunnelBandwidth: string;
```

- *Type:* string

---

##### `tunnelInsideIpVersion`<sup>Required</sup> <a name="tunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpnConcentratorId`<sup>Required</sup> <a name="vpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnConcentratorId"></a>

```typescript
public readonly vpnConcentratorId: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpnConnectionConfig <a name="Ec2VpnConnectionConfig" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionConfig: ec2VpnConnection.Ec2VpnConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId">customerGatewayId</a></code> | <code>string</code> | The ID of the customer gateway at your end of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type">type</a></code> | <code>string</code> | The type of VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration">enableAcceleration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicate whether to enable acceleration for the VPN connection.  Default: ``false``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>string</code> | The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>string</code> | The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>string</code> | The type of IP address assigned to the outside interface of the customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage">preSharedKeyStorage</a></code> | <code>string</code> | Describes the storage location for an instance store-backed AMI. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>string</code> | The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>string</code> | The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the VPN connection uses static routes only. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | Any tags assigned to the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | The ID of the transit gateway associated with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>string</code> | The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth">tunnelBandwidth</a></code> | <code>string</code> | The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>string</code> | Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId">vpnConcentratorId</a></code> | <code>string</code> | The ID of the VPN concentrator to associate with the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | The ID of the virtual private gateway at the AWS side of the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications">vpnTunnelOptionsSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | The tunnel options for the VPN connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.customerGatewayId"></a>

```typescript
public readonly customerGatewayId: string;
```

- *Type:* string

The ID of the customer gateway at your end of the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#customer_gateway_id Ec2VpnConnection#customer_gateway_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#type Ec2VpnConnection#type}

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.enableAcceleration"></a>

```typescript
public readonly enableAcceleration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicate whether to enable acceleration for the VPN connection.  Default: ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#enable_acceleration Ec2VpnConnection#enable_acceleration}

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```typescript
public readonly localIpv4NetworkCidr: string;
```

- *Type:* string

The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#local_ipv_4_network_cidr Ec2VpnConnection#local_ipv_4_network_cidr}

---

##### `localIpv6NetworkCidr`<sup>Optional</sup> <a name="localIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```typescript
public readonly localIpv6NetworkCidr: string;
```

- *Type:* string

The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#local_ipv_6_network_cidr Ec2VpnConnection#local_ipv_6_network_cidr}

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.outsideIpAddressType"></a>

```typescript
public readonly outsideIpAddressType: string;
```

- *Type:* string

The type of IP address assigned to the outside interface of the customer gateway device.

Valid values: ``PrivateIpv4`` | ``PublicIpv4`` | ``Ipv6``
 Default: ``PublicIpv4``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#outside_ip_address_type Ec2VpnConnection#outside_ip_address_type}

---

##### `preSharedKeyStorage`<sup>Optional</sup> <a name="preSharedKeyStorage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.preSharedKeyStorage"></a>

```typescript
public readonly preSharedKeyStorage: string;
```

- *Type:* string

Describes the storage location for an instance store-backed AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#pre_shared_key_storage Ec2VpnConnection#pre_shared_key_storage}

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```typescript
public readonly remoteIpv4NetworkCidr: string;
```

- *Type:* string

The IPv4 CIDR on the AWS side of the VPN connection.  Default: ``0.0.0.0/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#remote_ipv_4_network_cidr Ec2VpnConnection#remote_ipv_4_network_cidr}

---

##### `remoteIpv6NetworkCidr`<sup>Optional</sup> <a name="remoteIpv6NetworkCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```typescript
public readonly remoteIpv6NetworkCidr: string;
```

- *Type:* string

The IPv6 CIDR on the AWS side of the VPN connection.  Default: ``::/0``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#remote_ipv_6_network_cidr Ec2VpnConnection#remote_ipv_6_network_cidr}

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.staticRoutesOnly"></a>

```typescript
public readonly staticRoutesOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the VPN connection uses static routes only.

Static routes must be used for devices that don't support BGP.
 If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#static_routes_only Ec2VpnConnection#static_routes_only}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VpnConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

Any tags assigned to the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#tags Ec2VpnConnection#tags}

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

The ID of the transit gateway associated with the VPN connection.

You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#transit_gateway_id Ec2VpnConnection#transit_gateway_id}

---

##### `transportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```typescript
public readonly transportTransitGatewayAttachmentId: string;
```

- *Type:* string

The transit gateway attachment ID to use for the VPN tunnel.  Required if ``OutsideIpAddressType`` is set to ``PrivateIpv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#transport_transit_gateway_attachment_id Ec2VpnConnection#transport_transit_gateway_attachment_id}

---

##### `tunnelBandwidth`<sup>Optional</sup> <a name="tunnelBandwidth" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelBandwidth"></a>

```typescript
public readonly tunnelBandwidth: string;
```

- *Type:* string

The desired bandwidth specification for the VPN tunnel, used when creating or modifying VPN connection options to set the tunnel's throughput capacity.

``standard`` supports up to 1.25 Gbps per tunnel, while ``large`` supports up to 5 Gbps per tunnel. The default value is ``standard``. Existing VPN connections without a bandwidth setting will automatically default to ``standard``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#tunnel_bandwidth Ec2VpnConnection#tunnel_bandwidth}

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```typescript
public readonly tunnelInsideIpVersion: string;
```

- *Type:* string

Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.  Default: ``ipv4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#tunnel_inside_ip_version Ec2VpnConnection#tunnel_inside_ip_version}

---

##### `vpnConcentratorId`<sup>Optional</sup> <a name="vpnConcentratorId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnConcentratorId"></a>

```typescript
public readonly vpnConcentratorId: string;
```

- *Type:* string

The ID of the VPN concentrator to associate with the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#vpn_concentrator_id Ec2VpnConnection#vpn_concentrator_id}

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

The ID of the virtual private gateway at the AWS side of the VPN connection.

You must specify either ``TransitGatewayId`` or ``VpnGatewayId``, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#vpn_gateway_id Ec2VpnConnection#vpn_gateway_id}

---

##### `vpnTunnelOptionsSpecifications`<sup>Optional</sup> <a name="vpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionConfig.property.vpnTunnelOptionsSpecifications"></a>

```typescript
public readonly vpnTunnelOptionsSpecifications: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

The tunnel options for the VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#vpn_tunnel_options_specifications Ec2VpnConnection#vpn_tunnel_options_specifications}

---

### Ec2VpnConnectionTags <a name="Ec2VpnConnectionTags" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionTags: ec2VpnConnection.Ec2VpnConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#key Ec2VpnConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecifications <a name="Ec2VpnConnectionVpnTunnelOptionsSpecifications" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecifications: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction">dpdTimeoutAction</a></code> | <code>string</code> | The action to take after DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>number</code> | The number of seconds after which a DPD timeout occurs. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl">enableTunnelLifecycleControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turn on or off tunnel endpoint lifecycle control feature. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions">ikeVersions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` \| ``ikev2``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions">logOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | Options for logging VPN tunnel activity. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms">phase1EncryptionAlgorithms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds">phase1LifetimeSeconds</a></code> | <code>number</code> | The lifetime for phase 1 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms">phase2EncryptionAlgorithms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds">phase2LifetimeSeconds</a></code> | <code>number</code> | The lifetime for phase 2 of the IKE negotiation, in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey">preSharedKey</a></code> | <code>string</code> | The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage">rekeyFuzzPercentage</a></code> | <code>number</code> | The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds">rekeyMarginTimeSeconds</a></code> | <code>number</code> | The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize">replayWindowSize</a></code> | <code>number</code> | The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction">startupAction</a></code> | <code>string</code> | The action to take when the establishing the tunnel for the VPN connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr">tunnelInsideCidr</a></code> | <code>string</code> | The range of inside IP addresses for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr">tunnelInsideIpv6Cidr</a></code> | <code>string</code> | The range of inside IPv6 addresses for the tunnel. |

---

##### `dpdTimeoutAction`<sup>Optional</sup> <a name="dpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutAction"></a>

```typescript
public readonly dpdTimeoutAction: string;
```

- *Type:* string

The action to take after DPD timeout occurs.

Specify ``restart`` to restart the IKE initiation. Specify ``clear`` to end the IKE session.
 Valid Values: ``clear`` | ``none`` | ``restart``
 Default: ``clear``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#dpd_timeout_action Ec2VpnConnection#dpd_timeout_action}

---

##### `dpdTimeoutSeconds`<sup>Optional</sup> <a name="dpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.dpdTimeoutSeconds"></a>

```typescript
public readonly dpdTimeoutSeconds: number;
```

- *Type:* number

The number of seconds after which a DPD timeout occurs.

Constraints: A value greater than or equal to 30.
 Default: ``30``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#dpd_timeout_seconds Ec2VpnConnection#dpd_timeout_seconds}

---

##### `enableTunnelLifecycleControl`<sup>Optional</sup> <a name="enableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.enableTunnelLifecycleControl"></a>

```typescript
public readonly enableTunnelLifecycleControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turn on or off tunnel endpoint lifecycle control feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#enable_tunnel_lifecycle_control Ec2VpnConnection#enable_tunnel_lifecycle_control}

---

##### `ikeVersions`<sup>Optional</sup> <a name="ikeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.ikeVersions"></a>

```typescript
public readonly ikeVersions: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

The IKE versions that are permitted for the VPN tunnel.  Valid values: ``ikev1`` | ``ikev2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#ike_versions Ec2VpnConnection#ike_versions}

---

##### `logOptions`<sup>Optional</sup> <a name="logOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.logOptions"></a>

```typescript
public readonly logOptions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

Options for logging VPN tunnel activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#log_options Ec2VpnConnection#log_options}

---

##### `phase1DhGroupNumbers`<sup>Optional</sup> <a name="phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1DhGroupNumbers"></a>

```typescript
public readonly phase1DhGroupNumbers: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: ``2`` | ``14`` | ``15`` | ``16`` | ``17`` | ``18`` | ``19`` | ``20`` | ``21`` | ``22`` | ``23`` | ``24``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_1_dh_group_numbers Ec2VpnConnection#phase_1_dh_group_numbers}

---

##### `phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1EncryptionAlgorithms"></a>

```typescript
public readonly phase1EncryptionAlgorithms: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: ``AES128`` | ``AES256`` | ``AES128-GCM-16`` | ``AES256-GCM-16``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_1_encryption_algorithms Ec2VpnConnection#phase_1_encryption_algorithms}

---

##### `phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.

Valid values: ``SHA1`` | ``SHA2-256`` | ``SHA2-384`` | ``SHA2-512``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_1_integrity_algorithms Ec2VpnConnection#phase_1_integrity_algorithms}

---

##### `phase1LifetimeSeconds`<sup>Optional</sup> <a name="phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase1LifetimeSeconds"></a>

```typescript
public readonly phase1LifetimeSeconds: number;
```

- *Type:* number

The lifetime for phase 1 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 28,800.
 Default: ``28800``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_1_lifetime_seconds Ec2VpnConnection#phase_1_lifetime_seconds}

---

##### `phase2DhGroupNumbers`<sup>Optional</sup> <a name="phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2DhGroupNumbers"></a>

```typescript
public readonly phase2DhGroupNumbers: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: ``2`` | ``5`` | ``14`` | ``15`` | ``16`` | ``17`` | ``18`` | ``19`` | ``20`` | ``21`` | ``22`` | ``23`` | ``24``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_2_dh_group_numbers Ec2VpnConnection#phase_2_dh_group_numbers}

---

##### `phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2EncryptionAlgorithms"></a>

```typescript
public readonly phase2EncryptionAlgorithms: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: ``AES128`` | ``AES256`` | ``AES128-GCM-16`` | ``AES256-GCM-16``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_2_encryption_algorithms Ec2VpnConnection#phase_2_encryption_algorithms}

---

##### `phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.

Valid values: ``SHA1`` | ``SHA2-256`` | ``SHA2-384`` | ``SHA2-512``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_2_integrity_algorithms Ec2VpnConnection#phase_2_integrity_algorithms}

---

##### `phase2LifetimeSeconds`<sup>Optional</sup> <a name="phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.phase2LifetimeSeconds"></a>

```typescript
public readonly phase2LifetimeSeconds: number;
```

- *Type:* number

The lifetime for phase 2 of the IKE negotiation, in seconds.

Constraints: A value between 900 and 3,600. The value must be less than the value for ``Phase1LifetimeSeconds``.
 Default: ``3600``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#phase_2_lifetime_seconds Ec2VpnConnection#phase_2_lifetime_seconds}

---

##### `preSharedKey`<sup>Optional</sup> <a name="preSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.preSharedKey"></a>

```typescript
public readonly preSharedKey: string;
```

- *Type:* string

The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.

Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#pre_shared_key Ec2VpnConnection#pre_shared_key}

---

##### `rekeyFuzzPercentage`<sup>Optional</sup> <a name="rekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyFuzzPercentage"></a>

```typescript
public readonly rekeyFuzzPercentage: number;
```

- *Type:* number

The percentage of the rekey window (determined by ``RekeyMarginTimeSeconds``) during which the rekey time is randomly selected.

Constraints: A value between 0 and 100.
 Default: ``100``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#rekey_fuzz_percentage Ec2VpnConnection#rekey_fuzz_percentage}

---

##### `rekeyMarginTimeSeconds`<sup>Optional</sup> <a name="rekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.rekeyMarginTimeSeconds"></a>

```typescript
public readonly rekeyMarginTimeSeconds: number;
```

- *Type:* number

The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey.

The exact time of the rekey is randomly selected based on the value for ``RekeyFuzzPercentage``.
 Constraints: A value between 60 and half of ``Phase2LifetimeSeconds``.
 Default: ``270``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#rekey_margin_time_seconds Ec2VpnConnection#rekey_margin_time_seconds}

---

##### `replayWindowSize`<sup>Optional</sup> <a name="replayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.replayWindowSize"></a>

```typescript
public readonly replayWindowSize: number;
```

- *Type:* number

The number of packets in an IKE replay window.  Constraints: A value between 64 and 2048.  Default: ``1024``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#replay_window_size Ec2VpnConnection#replay_window_size}

---

##### `startupAction`<sup>Optional</sup> <a name="startupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.startupAction"></a>

```typescript
public readonly startupAction: string;
```

- *Type:* string

The action to take when the establishing the tunnel for the VPN connection.

By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify ``start`` for AWS to initiate the IKE negotiation.
 Valid Values: ``add`` | ``start``
 Default: ``add``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#startup_action Ec2VpnConnection#startup_action}

---

##### `tunnelInsideCidr`<sup>Optional</sup> <a name="tunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideCidr"></a>

```typescript
public readonly tunnelInsideCidr: string;
```

- *Type:* string

The range of inside IP addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway. 
 Constraints: A size /30 CIDR block from the ``169.254.0.0/16`` range. The following CIDR blocks are reserved and cannot be used:
  +   ``169.254.0.0/30`` 
  +   ``169.254.1.0/30`` 
  +   ``169.254.2.0/30`` 
  +   ``169.254.3.0/30`` 
  +   ``169.254.4.0/30`` 
  +   ``169.254.5.0/30`` 
  +   ``169.254.169.252/30``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#tunnel_inside_cidr Ec2VpnConnection#tunnel_inside_cidr}

---

##### `tunnelInsideIpv6Cidr`<sup>Optional</sup> <a name="tunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications.property.tunnelInsideIpv6Cidr"></a>

```typescript
public readonly tunnelInsideIpv6Cidr: string;
```

- *Type:* string

The range of inside IPv6 addresses for the tunnel.

Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
 Constraints: A size /126 CIDR block from the local ``fd00::/8`` range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#tunnel_inside_ipv_6_cidr Ec2VpnConnection#tunnel_inside_ipv_6_cidr}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value">value</a></code> | <code>string</code> | The IKE version. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The IKE version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | Options for sending VPN tunnel logs to CloudWatch. |

---

##### `cloudwatchLogOptions`<sup>Optional</sup> <a name="cloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

Options for sending VPN tunnel logs to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#cloudwatch_log_options Ec2VpnConnection#cloudwatch_log_options}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled">bgpLogEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn">bgpLogGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat">bgpLogOutputFormat</a></code> | <code>string</code> | The desired output format for BGP logs to be sent to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` \| ``False``. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | Set log format. Default format is ``json``.  Valid values: ``json`` \| ``text``. |

---

##### `bgpLogEnabled`<sup>Optional</sup> <a name="bgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogEnabled"></a>

```typescript
public readonly bgpLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable BGP logging for the VPN connection. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#bgp_log_enabled Ec2VpnConnection#bgp_log_enabled}

---

##### `bgpLogGroupArn`<sup>Optional</sup> <a name="bgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogGroupArn"></a>

```typescript
public readonly bgpLogGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch log group where BGP logs will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#bgp_log_group_arn Ec2VpnConnection#bgp_log_group_arn}

---

##### `bgpLogOutputFormat`<sup>Optional</sup> <a name="bgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.bgpLogOutputFormat"></a>

```typescript
public readonly bgpLogOutputFormat: string;
```

- *Type:* string

The desired output format for BGP logs to be sent to CloudWatch.

Default format is ``json``.
 Valid values: ``json`` | ``text``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#bgp_log_output_format Ec2VpnConnection#bgp_log_output_format}

---

##### `logEnabled`<sup>Optional</sup> <a name="logEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable or disable VPN tunnel logging feature. Default value is ``False``.  Valid values: ``True`` | ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#log_enabled Ec2VpnConnection#log_enabled}

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#log_group_arn Ec2VpnConnection#log_group_arn}

---

##### `logOutputFormat`<sup>Optional</sup> <a name="logOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

Set log format. Default format is ``json``.  Valid values: ``json`` | ``text``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#log_output_format Ec2VpnConnection#log_output_format}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value">value</a></code> | <code>number</code> | The Diffie-Hellmann group number. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value">value</a></code> | <code>string</code> | The value for the encryption algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value">value</a></code> | <code>string</code> | The value for the integrity algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value">value</a></code> | <code>number</code> | The Diffie-Hellmann group number. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The Diffie-Hellmann group number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value">value</a></code> | <code>string</code> | The encryption algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

const ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms: ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value">value</a></code> | <code>string</code> | The integrity algorithm. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The integrity algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpn_connection#value Ec2VpnConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpnConnectionTagsList <a name="Ec2VpnConnectionTagsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>[]

---


### Ec2VpnConnectionTagsOutputReference <a name="Ec2VpnConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionTags">Ec2VpnConnectionTags</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled">resetBgpLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn">resetBgpLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat">resetBgpLogOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">resetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">resetLogOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBgpLogEnabled` <a name="resetBgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogEnabled"></a>

```typescript
public resetBgpLogEnabled(): void
```

##### `resetBgpLogGroupArn` <a name="resetBgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogGroupArn"></a>

```typescript
public resetBgpLogGroupArn(): void
```

##### `resetBgpLogOutputFormat` <a name="resetBgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetBgpLogOutputFormat"></a>

```typescript
public resetBgpLogOutputFormat(): void
```

##### `resetLogEnabled` <a name="resetLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```typescript
public resetLogEnabled(): void
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```

##### `resetLogOutputFormat` <a name="resetLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```typescript
public resetLogOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput">bgpLogEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput">bgpLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput">bgpLogOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">logEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">logOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled">bgpLogEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn">bgpLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat">bgpLogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpLogEnabledInput`<sup>Optional</sup> <a name="bgpLogEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabledInput"></a>

```typescript
public readonly bgpLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpLogGroupArnInput`<sup>Optional</sup> <a name="bgpLogGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArnInput"></a>

```typescript
public readonly bgpLogGroupArnInput: string;
```

- *Type:* string

---

##### `bgpLogOutputFormatInput`<sup>Optional</sup> <a name="bgpLogOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormatInput"></a>

```typescript
public readonly bgpLogOutputFormatInput: string;
```

- *Type:* string

---

##### `logEnabledInput`<sup>Optional</sup> <a name="logEnabledInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```typescript
public readonly logEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logOutputFormatInput`<sup>Optional</sup> <a name="logOutputFormatInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```typescript
public readonly logOutputFormatInput: string;
```

- *Type:* string

---

##### `bgpLogEnabled`<sup>Required</sup> <a name="bgpLogEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogEnabled"></a>

```typescript
public readonly bgpLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bgpLogGroupArn`<sup>Required</sup> <a name="bgpLogGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogGroupArn"></a>

```typescript
public readonly bgpLogGroupArn: string;
```

- *Type:* string

---

##### `bgpLogOutputFormat`<sup>Required</sup> <a name="bgpLogOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.bgpLogOutputFormat"></a>

```typescript
public readonly bgpLogOutputFormat: string;
```

- *Type:* string

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```typescript
public readonly logEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```typescript
public readonly logOutputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions">putCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions">resetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogOptions` <a name="putCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions"></a>

```typescript
public putCloudwatchLogOptions(value: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `resetCloudwatchLogOptions` <a name="resetCloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```typescript
public resetCloudwatchLogOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatchLogOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```typescript
public readonly cloudwatchLogOptions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatchLogOptionsInput`<sup>Optional</sup> <a name="cloudwatchLogOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```typescript
public readonly cloudwatchLogOptionsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsCloudwatchLogOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions">putIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions">putLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers">putPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms">putPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms">putPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers">putPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms">putPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms">putPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction">resetDpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds">resetDpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl">resetEnableTunnelLifecycleControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions">resetIkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions">resetLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers">resetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms">resetPhase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms">resetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds">resetPhase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers">resetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms">resetPhase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms">resetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds">resetPhase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey">resetPreSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage">resetRekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds">resetRekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize">resetReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction">resetStartupAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr">resetTunnelInsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr">resetTunnelInsideIpv6Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIkeVersions` <a name="putIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions"></a>

```typescript
public putIkeVersions(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putIkeVersions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---

##### `putLogOptions` <a name="putLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions"></a>

```typescript
public putLogOptions(value: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `putPhase1DhGroupNumbers` <a name="putPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers"></a>

```typescript
public putPhase1DhGroupNumbers(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1DhGroupNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---

##### `putPhase1EncryptionAlgorithms` <a name="putPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms"></a>

```typescript
public putPhase1EncryptionAlgorithms(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1EncryptionAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---

##### `putPhase1IntegrityAlgorithms` <a name="putPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms"></a>

```typescript
public putPhase1IntegrityAlgorithms(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase1IntegrityAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---

##### `putPhase2DhGroupNumbers` <a name="putPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers"></a>

```typescript
public putPhase2DhGroupNumbers(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2DhGroupNumbers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---

##### `putPhase2EncryptionAlgorithms` <a name="putPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms"></a>

```typescript
public putPhase2EncryptionAlgorithms(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2EncryptionAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---

##### `putPhase2IntegrityAlgorithms` <a name="putPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms"></a>

```typescript
public putPhase2IntegrityAlgorithms(value: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.putPhase2IntegrityAlgorithms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---

##### `resetDpdTimeoutAction` <a name="resetDpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutAction"></a>

```typescript
public resetDpdTimeoutAction(): void
```

##### `resetDpdTimeoutSeconds` <a name="resetDpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetDpdTimeoutSeconds"></a>

```typescript
public resetDpdTimeoutSeconds(): void
```

##### `resetEnableTunnelLifecycleControl` <a name="resetEnableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetEnableTunnelLifecycleControl"></a>

```typescript
public resetEnableTunnelLifecycleControl(): void
```

##### `resetIkeVersions` <a name="resetIkeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetIkeVersions"></a>

```typescript
public resetIkeVersions(): void
```

##### `resetLogOptions` <a name="resetLogOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetLogOptions"></a>

```typescript
public resetLogOptions(): void
```

##### `resetPhase1DhGroupNumbers` <a name="resetPhase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1DhGroupNumbers"></a>

```typescript
public resetPhase1DhGroupNumbers(): void
```

##### `resetPhase1EncryptionAlgorithms` <a name="resetPhase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1EncryptionAlgorithms"></a>

```typescript
public resetPhase1EncryptionAlgorithms(): void
```

##### `resetPhase1IntegrityAlgorithms` <a name="resetPhase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1IntegrityAlgorithms"></a>

```typescript
public resetPhase1IntegrityAlgorithms(): void
```

##### `resetPhase1LifetimeSeconds` <a name="resetPhase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase1LifetimeSeconds"></a>

```typescript
public resetPhase1LifetimeSeconds(): void
```

##### `resetPhase2DhGroupNumbers` <a name="resetPhase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2DhGroupNumbers"></a>

```typescript
public resetPhase2DhGroupNumbers(): void
```

##### `resetPhase2EncryptionAlgorithms` <a name="resetPhase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2EncryptionAlgorithms"></a>

```typescript
public resetPhase2EncryptionAlgorithms(): void
```

##### `resetPhase2IntegrityAlgorithms` <a name="resetPhase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2IntegrityAlgorithms"></a>

```typescript
public resetPhase2IntegrityAlgorithms(): void
```

##### `resetPhase2LifetimeSeconds` <a name="resetPhase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPhase2LifetimeSeconds"></a>

```typescript
public resetPhase2LifetimeSeconds(): void
```

##### `resetPreSharedKey` <a name="resetPreSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetPreSharedKey"></a>

```typescript
public resetPreSharedKey(): void
```

##### `resetRekeyFuzzPercentage` <a name="resetRekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyFuzzPercentage"></a>

```typescript
public resetRekeyFuzzPercentage(): void
```

##### `resetRekeyMarginTimeSeconds` <a name="resetRekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetRekeyMarginTimeSeconds"></a>

```typescript
public resetRekeyMarginTimeSeconds(): void
```

##### `resetReplayWindowSize` <a name="resetReplayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetReplayWindowSize"></a>

```typescript
public resetReplayWindowSize(): void
```

##### `resetStartupAction` <a name="resetStartupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetStartupAction"></a>

```typescript
public resetStartupAction(): void
```

##### `resetTunnelInsideCidr` <a name="resetTunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideCidr"></a>

```typescript
public resetTunnelInsideCidr(): void
```

##### `resetTunnelInsideIpv6Cidr` <a name="resetTunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.resetTunnelInsideIpv6Cidr"></a>

```typescript
public resetTunnelInsideIpv6Cidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions">ikeVersions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions">logOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers">phase1DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms">phase1EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms">phase1IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers">phase2DhGroupNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms">phase2EncryptionAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms">phase2IntegrityAlgorithms</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput">dpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput">dpdTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput">enableTunnelLifecycleControlInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput">ikeVersionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput">logOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput">phase1DhGroupNumbersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput">phase1EncryptionAlgorithmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput">phase1IntegrityAlgorithmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput">phase1LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput">phase2DhGroupNumbersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput">phase2EncryptionAlgorithmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput">phase2IntegrityAlgorithmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput">phase2LifetimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput">preSharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput">rekeyFuzzPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput">rekeyMarginTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput">replayWindowSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput">startupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput">tunnelInsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput">tunnelInsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction">dpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds">dpdTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl">enableTunnelLifecycleControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds">phase1LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds">phase2LifetimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey">preSharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage">rekeyFuzzPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds">rekeyMarginTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize">replayWindowSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction">startupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr">tunnelInsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr">tunnelInsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ikeVersions`<sup>Required</sup> <a name="ikeVersions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersions"></a>

```typescript
public readonly ikeVersions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersionsList</a>

---

##### `logOptions`<sup>Required</sup> <a name="logOptions" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptions"></a>

```typescript
public readonly logOptions: Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptionsOutputReference</a>

---

##### `phase1DhGroupNumbers`<sup>Required</sup> <a name="phase1DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbers"></a>

```typescript
public readonly phase1DhGroupNumbers: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList</a>

---

##### `phase1EncryptionAlgorithms`<sup>Required</sup> <a name="phase1EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithms"></a>

```typescript
public readonly phase1EncryptionAlgorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList</a>

---

##### `phase1IntegrityAlgorithms`<sup>Required</sup> <a name="phase1IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithms"></a>

```typescript
public readonly phase1IntegrityAlgorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList</a>

---

##### `phase2DhGroupNumbers`<sup>Required</sup> <a name="phase2DhGroupNumbers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbers"></a>

```typescript
public readonly phase2DhGroupNumbers: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList</a>

---

##### `phase2EncryptionAlgorithms`<sup>Required</sup> <a name="phase2EncryptionAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithms"></a>

```typescript
public readonly phase2EncryptionAlgorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList</a>

---

##### `phase2IntegrityAlgorithms`<sup>Required</sup> <a name="phase2IntegrityAlgorithms" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithms"></a>

```typescript
public readonly phase2IntegrityAlgorithms: Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList</a>

---

##### `dpdTimeoutActionInput`<sup>Optional</sup> <a name="dpdTimeoutActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutActionInput"></a>

```typescript
public readonly dpdTimeoutActionInput: string;
```

- *Type:* string

---

##### `dpdTimeoutSecondsInput`<sup>Optional</sup> <a name="dpdTimeoutSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSecondsInput"></a>

```typescript
public readonly dpdTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `enableTunnelLifecycleControlInput`<sup>Optional</sup> <a name="enableTunnelLifecycleControlInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControlInput"></a>

```typescript
public readonly enableTunnelLifecycleControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ikeVersionsInput`<sup>Optional</sup> <a name="ikeVersionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.ikeVersionsInput"></a>

```typescript
public readonly ikeVersionsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsIkeVersions</a>[]

---

##### `logOptionsInput`<sup>Optional</sup> <a name="logOptionsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.logOptionsInput"></a>

```typescript
public readonly logOptionsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions">Ec2VpnConnectionVpnTunnelOptionsSpecificationsLogOptions</a>

---

##### `phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="phase1DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1DhGroupNumbersInput"></a>

```typescript
public readonly phase1DhGroupNumbersInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---

##### `phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="phase1EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1EncryptionAlgorithmsInput"></a>

```typescript
public readonly phase1EncryptionAlgorithmsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---

##### `phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase1IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```typescript
public readonly phase1IntegrityAlgorithmsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---

##### `phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="phase1LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSecondsInput"></a>

```typescript
public readonly phase1LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="phase2DhGroupNumbersInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2DhGroupNumbersInput"></a>

```typescript
public readonly phase2DhGroupNumbersInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---

##### `phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="phase2EncryptionAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2EncryptionAlgorithmsInput"></a>

```typescript
public readonly phase2EncryptionAlgorithmsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---

##### `phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="phase2IntegrityAlgorithmsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```typescript
public readonly phase2IntegrityAlgorithmsInput: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---

##### `phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="phase2LifetimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSecondsInput"></a>

```typescript
public readonly phase2LifetimeSecondsInput: number;
```

- *Type:* number

---

##### `preSharedKeyInput`<sup>Optional</sup> <a name="preSharedKeyInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKeyInput"></a>

```typescript
public readonly preSharedKeyInput: string;
```

- *Type:* string

---

##### `rekeyFuzzPercentageInput`<sup>Optional</sup> <a name="rekeyFuzzPercentageInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentageInput"></a>

```typescript
public readonly rekeyFuzzPercentageInput: number;
```

- *Type:* number

---

##### `rekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="rekeyMarginTimeSecondsInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSecondsInput"></a>

```typescript
public readonly rekeyMarginTimeSecondsInput: number;
```

- *Type:* number

---

##### `replayWindowSizeInput`<sup>Optional</sup> <a name="replayWindowSizeInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSizeInput"></a>

```typescript
public readonly replayWindowSizeInput: number;
```

- *Type:* number

---

##### `startupActionInput`<sup>Optional</sup> <a name="startupActionInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupActionInput"></a>

```typescript
public readonly startupActionInput: string;
```

- *Type:* string

---

##### `tunnelInsideCidrInput`<sup>Optional</sup> <a name="tunnelInsideCidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidrInput"></a>

```typescript
public readonly tunnelInsideCidrInput: string;
```

- *Type:* string

---

##### `tunnelInsideIpv6CidrInput`<sup>Optional</sup> <a name="tunnelInsideIpv6CidrInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6CidrInput"></a>

```typescript
public readonly tunnelInsideIpv6CidrInput: string;
```

- *Type:* string

---

##### `dpdTimeoutAction`<sup>Required</sup> <a name="dpdTimeoutAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutAction"></a>

```typescript
public readonly dpdTimeoutAction: string;
```

- *Type:* string

---

##### `dpdTimeoutSeconds`<sup>Required</sup> <a name="dpdTimeoutSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.dpdTimeoutSeconds"></a>

```typescript
public readonly dpdTimeoutSeconds: number;
```

- *Type:* number

---

##### `enableTunnelLifecycleControl`<sup>Required</sup> <a name="enableTunnelLifecycleControl" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.enableTunnelLifecycleControl"></a>

```typescript
public readonly enableTunnelLifecycleControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `phase1LifetimeSeconds`<sup>Required</sup> <a name="phase1LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase1LifetimeSeconds"></a>

```typescript
public readonly phase1LifetimeSeconds: number;
```

- *Type:* number

---

##### `phase2LifetimeSeconds`<sup>Required</sup> <a name="phase2LifetimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.phase2LifetimeSeconds"></a>

```typescript
public readonly phase2LifetimeSeconds: number;
```

- *Type:* number

---

##### `preSharedKey`<sup>Required</sup> <a name="preSharedKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.preSharedKey"></a>

```typescript
public readonly preSharedKey: string;
```

- *Type:* string

---

##### `rekeyFuzzPercentage`<sup>Required</sup> <a name="rekeyFuzzPercentage" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyFuzzPercentage"></a>

```typescript
public readonly rekeyFuzzPercentage: number;
```

- *Type:* number

---

##### `rekeyMarginTimeSeconds`<sup>Required</sup> <a name="rekeyMarginTimeSeconds" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.rekeyMarginTimeSeconds"></a>

```typescript
public readonly rekeyMarginTimeSeconds: number;
```

- *Type:* number

---

##### `replayWindowSize`<sup>Required</sup> <a name="replayWindowSize" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.replayWindowSize"></a>

```typescript
public readonly replayWindowSize: number;
```

- *Type:* number

---

##### `startupAction`<sup>Required</sup> <a name="startupAction" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.startupAction"></a>

```typescript
public readonly startupAction: string;
```

- *Type:* string

---

##### `tunnelInsideCidr`<sup>Required</sup> <a name="tunnelInsideCidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideCidr"></a>

```typescript
public readonly tunnelInsideCidr: string;
```

- *Type:* string

---

##### `tunnelInsideIpv6Cidr`<sup>Required</sup> <a name="tunnelInsideIpv6Cidr" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.tunnelInsideIpv6Cidr"></a>

```typescript
public readonly tunnelInsideIpv6Cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecifications">Ec2VpnConnectionVpnTunnelOptionsSpecifications</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase1IntegrityAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2DhGroupNumbers</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2EncryptionAlgorithms</a>

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get"></a>

```typescript
public get(index: number): Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>[]

---


### Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference <a name="Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer"></a>

```typescript
import { ec2VpnConnection } from '@cdktn/provider-awscc'

new ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpnConnection.Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms">Ec2VpnConnectionVpnTunnelOptionsSpecificationsPhase2IntegrityAlgorithms</a>

---



