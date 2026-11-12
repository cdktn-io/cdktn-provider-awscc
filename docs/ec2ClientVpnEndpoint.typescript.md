# `ec2ClientVpnEndpoint` Submodule <a name="`ec2ClientVpnEndpoint` Submodule" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnEndpoint <a name="Ec2ClientVpnEndpoint" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig">Ec2ClientVpnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions">putAuthenticationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy">putAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions">putClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions">putClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions">putClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions">putConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions">putDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration">putTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy">resetAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock">resetClientCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions">resetClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions">resetClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions">resetClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions">resetDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout">resetDisconnectOnSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType">resetEndpointIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal">resetSelfServicePortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours">resetSessionTimeoutHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel">resetSplitTunnel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType">resetTrafficIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration">resetTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol">resetTransportProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort">resetVpnPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationOptions` <a name="putAuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions"></a>

```typescript
public putAuthenticationOptions(value: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthenticationOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---

##### `putAuthorizationPolicy` <a name="putAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy"></a>

```typescript
public putAuthorizationPolicy(value: Ec2ClientVpnEndpointAuthorizationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putAuthorizationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---

##### `putClientConnectOptions` <a name="putClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions"></a>

```typescript
public putClientConnectOptions(value: Ec2ClientVpnEndpointClientConnectOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientConnectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `putClientLoginBannerOptions` <a name="putClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions"></a>

```typescript
public putClientLoginBannerOptions(value: Ec2ClientVpnEndpointClientLoginBannerOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientLoginBannerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `putClientRouteEnforcementOptions` <a name="putClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions"></a>

```typescript
public putClientRouteEnforcementOptions(value: Ec2ClientVpnEndpointClientRouteEnforcementOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putClientRouteEnforcementOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---

##### `putConnectionLogOptions` <a name="putConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions"></a>

```typescript
public putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putConnectionLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `putDevicePostureOptions` <a name="putDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions"></a>

```typescript
public putDevicePostureOptions(value: Ec2ClientVpnEndpointDevicePostureOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putDevicePostureOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications"></a>

```typescript
public putTagSpecifications(value: IResolvable | Ec2ClientVpnEndpointTagSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---

##### `putTransitGatewayConfiguration` <a name="putTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration"></a>

```typescript
public putTransitGatewayConfiguration(value: Ec2ClientVpnEndpointTransitGatewayConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.putTransitGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---

##### `resetAuthorizationPolicy` <a name="resetAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetAuthorizationPolicy"></a>

```typescript
public resetAuthorizationPolicy(): void
```

##### `resetClientCidrBlock` <a name="resetClientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientCidrBlock"></a>

```typescript
public resetClientCidrBlock(): void
```

##### `resetClientConnectOptions` <a name="resetClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientConnectOptions"></a>

```typescript
public resetClientConnectOptions(): void
```

##### `resetClientLoginBannerOptions` <a name="resetClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientLoginBannerOptions"></a>

```typescript
public resetClientLoginBannerOptions(): void
```

##### `resetClientRouteEnforcementOptions` <a name="resetClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetClientRouteEnforcementOptions"></a>

```typescript
public resetClientRouteEnforcementOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDevicePostureOptions` <a name="resetDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDevicePostureOptions"></a>

```typescript
public resetDevicePostureOptions(): void
```

##### `resetDisconnectOnSessionTimeout` <a name="resetDisconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDisconnectOnSessionTimeout"></a>

```typescript
public resetDisconnectOnSessionTimeout(): void
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetDnsServers"></a>

```typescript
public resetDnsServers(): void
```

##### `resetEndpointIpAddressType` <a name="resetEndpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetEndpointIpAddressType"></a>

```typescript
public resetEndpointIpAddressType(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSelfServicePortal` <a name="resetSelfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSelfServicePortal"></a>

```typescript
public resetSelfServicePortal(): void
```

##### `resetSessionTimeoutHours` <a name="resetSessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSessionTimeoutHours"></a>

```typescript
public resetSessionTimeoutHours(): void
```

##### `resetSplitTunnel` <a name="resetSplitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetSplitTunnel"></a>

```typescript
public resetSplitTunnel(): void
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTagSpecifications"></a>

```typescript
public resetTagSpecifications(): void
```

##### `resetTrafficIpAddressType` <a name="resetTrafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTrafficIpAddressType"></a>

```typescript
public resetTrafficIpAddressType(): void
```

##### `resetTransitGatewayConfiguration` <a name="resetTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransitGatewayConfiguration"></a>

```typescript
public resetTransitGatewayConfiguration(): void
```

##### `resetTransportProtocol` <a name="resetTransportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetTransportProtocol"></a>

```typescript
public resetTransportProtocol(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

##### `resetVpnPort` <a name="resetVpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.resetVpnPort"></a>

```typescript
public resetVpnPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions">authenticationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy">authorizationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions">clientRouteEnforcementOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions">devicePostureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration">transitGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput">authenticationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput">authorizationPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput">clientCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput">clientConnectOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput">clientLoginBannerOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput">clientRouteEnforcementOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput">connectionLogOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput">devicePostureOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput">disconnectOnSessionTimeoutInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput">dnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput">endpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput">selfServicePortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput">serverCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput">sessionTimeoutHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput">splitTunnelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput">trafficIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput">transitGatewayConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput">transportProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput">vpnPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock">clientCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout">disconnectOnSessionTimeout</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal">selfServicePortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel">splitTunnel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType">trafficIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort">vpnPort</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptions"></a>

```typescript
public readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList">Ec2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `authorizationPolicy`<sup>Required</sup> <a name="authorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicy"></a>

```typescript
public readonly authorizationPolicy: Ec2ClientVpnEndpointAuthorizationPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference">Ec2ClientVpnEndpointAuthorizationPolicyOutputReference</a>

---

##### `clientConnectOptions`<sup>Required</sup> <a name="clientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptions"></a>

```typescript
public readonly clientConnectOptions: Ec2ClientVpnEndpointClientConnectOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference">Ec2ClientVpnEndpointClientConnectOptionsOutputReference</a>

---

##### `clientLoginBannerOptions`<sup>Required</sup> <a name="clientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```typescript
public readonly clientLoginBannerOptions: Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference">Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference</a>

---

##### `clientRouteEnforcementOptions`<sup>Required</sup> <a name="clientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptions"></a>

```typescript
public readonly clientRouteEnforcementOptions: Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference">Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference</a>

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptions"></a>

```typescript
public readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference">Ec2ClientVpnEndpointConnectionLogOptionsOutputReference</a>

---

##### `devicePostureOptions`<sup>Required</sup> <a name="devicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptions"></a>

```typescript
public readonly devicePostureOptions: Ec2ClientVpnEndpointDevicePostureOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference">Ec2ClientVpnEndpointDevicePostureOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: Ec2ClientVpnEndpointTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList">Ec2ClientVpnEndpointTagSpecificationsList</a>

---

##### `transitGatewayConfiguration`<sup>Required</sup> <a name="transitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfiguration"></a>

```typescript
public readonly transitGatewayConfiguration: Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference">Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference</a>

---

##### `authenticationOptionsInput`<sup>Optional</sup> <a name="authenticationOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authenticationOptionsInput"></a>

```typescript
public readonly authenticationOptionsInput: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---

##### `authorizationPolicyInput`<sup>Optional</sup> <a name="authorizationPolicyInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.authorizationPolicyInput"></a>

```typescript
public readonly authorizationPolicyInput: IResolvable | Ec2ClientVpnEndpointAuthorizationPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---

##### `clientCidrBlockInput`<sup>Optional</sup> <a name="clientCidrBlockInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlockInput"></a>

```typescript
public readonly clientCidrBlockInput: string;
```

- *Type:* string

---

##### `clientConnectOptionsInput`<sup>Optional</sup> <a name="clientConnectOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientConnectOptionsInput"></a>

```typescript
public readonly clientConnectOptionsInput: IResolvable | Ec2ClientVpnEndpointClientConnectOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---

##### `clientLoginBannerOptionsInput`<sup>Optional</sup> <a name="clientLoginBannerOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientLoginBannerOptionsInput"></a>

```typescript
public readonly clientLoginBannerOptionsInput: IResolvable | Ec2ClientVpnEndpointClientLoginBannerOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---

##### `clientRouteEnforcementOptionsInput`<sup>Optional</sup> <a name="clientRouteEnforcementOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientRouteEnforcementOptionsInput"></a>

```typescript
public readonly clientRouteEnforcementOptionsInput: IResolvable | Ec2ClientVpnEndpointClientRouteEnforcementOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---

##### `connectionLogOptionsInput`<sup>Optional</sup> <a name="connectionLogOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.connectionLogOptionsInput"></a>

```typescript
public readonly connectionLogOptionsInput: IResolvable | Ec2ClientVpnEndpointConnectionLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `devicePostureOptionsInput`<sup>Optional</sup> <a name="devicePostureOptionsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.devicePostureOptionsInput"></a>

```typescript
public readonly devicePostureOptionsInput: IResolvable | Ec2ClientVpnEndpointDevicePostureOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---

##### `disconnectOnSessionTimeoutInput`<sup>Optional</sup> <a name="disconnectOnSessionTimeoutInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeoutInput"></a>

```typescript
public readonly disconnectOnSessionTimeoutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServersInput"></a>

```typescript
public readonly dnsServersInput: string[];
```

- *Type:* string[]

---

##### `endpointIpAddressTypeInput`<sup>Optional</sup> <a name="endpointIpAddressTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressTypeInput"></a>

```typescript
public readonly endpointIpAddressTypeInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `selfServicePortalInput`<sup>Optional</sup> <a name="selfServicePortalInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortalInput"></a>

```typescript
public readonly selfServicePortalInput: string;
```

- *Type:* string

---

##### `serverCertificateArnInput`<sup>Optional</sup> <a name="serverCertificateArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArnInput"></a>

```typescript
public readonly serverCertificateArnInput: string;
```

- *Type:* string

---

##### `sessionTimeoutHoursInput`<sup>Optional</sup> <a name="sessionTimeoutHoursInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHoursInput"></a>

```typescript
public readonly sessionTimeoutHoursInput: number;
```

- *Type:* number

---

##### `splitTunnelInput`<sup>Optional</sup> <a name="splitTunnelInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnelInput"></a>

```typescript
public readonly splitTunnelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tagSpecificationsInput"></a>

```typescript
public readonly tagSpecificationsInput: IResolvable | Ec2ClientVpnEndpointTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---

##### `trafficIpAddressTypeInput`<sup>Optional</sup> <a name="trafficIpAddressTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressTypeInput"></a>

```typescript
public readonly trafficIpAddressTypeInput: string;
```

- *Type:* string

---

##### `transitGatewayConfigurationInput`<sup>Optional</sup> <a name="transitGatewayConfigurationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transitGatewayConfigurationInput"></a>

```typescript
public readonly transitGatewayConfigurationInput: IResolvable | Ec2ClientVpnEndpointTransitGatewayConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---

##### `transportProtocolInput`<sup>Optional</sup> <a name="transportProtocolInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocolInput"></a>

```typescript
public readonly transportProtocolInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpnPortInput`<sup>Optional</sup> <a name="vpnPortInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPortInput"></a>

```typescript
public readonly vpnPortInput: number;
```

- *Type:* number

---

##### `clientCidrBlock`<sup>Required</sup> <a name="clientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.clientCidrBlock"></a>

```typescript
public readonly clientCidrBlock: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disconnectOnSessionTimeout`<sup>Required</sup> <a name="disconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.disconnectOnSessionTimeout"></a>

```typescript
public readonly disconnectOnSessionTimeout: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `selfServicePortal`<sup>Required</sup> <a name="selfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.selfServicePortal"></a>

```typescript
public readonly selfServicePortal: string;
```

- *Type:* string

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

---

##### `sessionTimeoutHours`<sup>Required</sup> <a name="sessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```typescript
public readonly sessionTimeoutHours: number;
```

- *Type:* number

---

##### `splitTunnel`<sup>Required</sup> <a name="splitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.splitTunnel"></a>

```typescript
public readonly splitTunnel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trafficIpAddressType`<sup>Required</sup> <a name="trafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.trafficIpAddressType"></a>

```typescript
public readonly trafficIpAddressType: string;
```

- *Type:* string

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpnPort`<sup>Required</sup> <a name="vpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.vpnPort"></a>

```typescript
public readonly vpnPort: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnEndpointAuthenticationOptions <a name="Ec2ClientVpnEndpointAuthenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointAuthenticationOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication">federatedAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}.

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}.

---

##### `federatedAuthentication`<sup>Optional</sup> <a name="federatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.federatedAuthentication"></a>

```typescript
public readonly federatedAuthentication: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}.

---

##### `mutualAuthentication`<sup>Optional</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions.property.mutualAuthentication"></a>

```typescript
public readonly mutualAuthentication: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}. |

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn">samlProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}. |

---

##### `samlProviderArn`<sup>Optional</sup> <a name="samlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.samlProviderArn"></a>

```typescript
public readonly samlProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}.

---

##### `selfServiceSamlProviderArn`<sup>Optional</sup> <a name="selfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication.property.selfServiceSamlProviderArn"></a>

```typescript
public readonly selfServiceSamlProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}.

---

### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn">clientRootCertificateChainArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}. |

---

##### `clientRootCertificateChainArn`<sup>Optional</sup> <a name="clientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication.property.clientRootCertificateChainArn"></a>

```typescript
public readonly clientRootCertificateChainArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}.

---

### Ec2ClientVpnEndpointAuthorizationPolicy <a name="Ec2ClientVpnEndpointAuthorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointAuthorizationPolicy: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description">description</a></code> | <code>string</code> | A brief description of the authorization policy. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | The Cedar policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode">shadowMode</a></code> | <code>string</code> | Whether the authorization policy runs in shadow (observe-only) mode. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the authorization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The Cedar policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document Ec2ClientVpnEndpoint#policy_document}

---

##### `shadowMode`<sup>Optional</sup> <a name="shadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy.property.shadowMode"></a>

```typescript
public readonly shadowMode: string;
```

- *Type:* string

Whether the authorization policy runs in shadow (observe-only) mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode Ec2ClientVpnEndpoint#shadow_mode}

---

### Ec2ClientVpnEndpointClientConnectOptions <a name="Ec2ClientVpnEndpointClientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointClientConnectOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}.

---

### Ec2ClientVpnEndpointClientLoginBannerOptions <a name="Ec2ClientVpnEndpointClientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointClientLoginBannerOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText">bannerText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |

---

##### `bannerText`<sup>Optional</sup> <a name="bannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.bannerText"></a>

```typescript
public readonly bannerText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

### Ec2ClientVpnEndpointClientRouteEnforcementOptions <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointClientRouteEnforcementOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}. |

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}.

---

### Ec2ClientVpnEndpointConfig <a name="Ec2ClientVpnEndpointConfig" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointConfig: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions">authenticationOptions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | Information about the authentication method to be used to authenticate clients. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions">connectionLogOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | Information about the client connection logging options. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy">authorizationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | The Cedar authorization policy to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock">clientCidrBlock</a></code> | <code>string</code> | The IPv4 address range, in CIDR notation, from which to assign client IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions">clientConnectOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | The options for managing connection authorization for new client connections. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions">clientLoginBannerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions">clientRouteEnforcementOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description">description</a></code> | <code>string</code> | A brief description of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions">devicePostureOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | The device-posture trust providers to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout">disconnectOnSessionTimeout</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Information about the DNS servers to be used for DNS resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The IDs of one or more security groups to apply to the target network. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal">selfServicePortal</a></code> | <code>string</code> | Specify whether to enable the self-service portal for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours">sessionTimeoutHours</a></code> | <code>number</code> | The maximum VPN session duration time in hours. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel">splitTunnel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications">tagSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | The tags to apply to the Client VPN endpoint during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType">trafficIpAddressType</a></code> | <code>string</code> | The IP address type of the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration">transitGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol">transportProtocol</a></code> | <code>string</code> | The transport protocol to be used by the VPN session. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC to associate with the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort">vpnPort</a></code> | <code>number</code> | The port number to assign to the Client VPN endpoint for TCP and UDP traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationOptions`<sup>Required</sup> <a name="authenticationOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authenticationOptions"></a>

```typescript
public readonly authenticationOptions: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

Information about the authentication method to be used to authenticate clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}

---

##### `connectionLogOptions`<sup>Required</sup> <a name="connectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.connectionLogOptions"></a>

```typescript
public readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

Information about the client connection logging options.

If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}

---

##### `authorizationPolicy`<sup>Optional</sup> <a name="authorizationPolicy" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.authorizationPolicy"></a>

```typescript
public readonly authorizationPolicy: Ec2ClientVpnEndpointAuthorizationPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

The Cedar authorization policy to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy Ec2ClientVpnEndpoint#authorization_policy}

---

##### `clientCidrBlock`<sup>Optional</sup> <a name="clientCidrBlock" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientCidrBlock"></a>

```typescript
public readonly clientCidrBlock: string;
```

- *Type:* string

The IPv4 address range, in CIDR notation, from which to assign client IP addresses.

The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}

---

##### `clientConnectOptions`<sup>Optional</sup> <a name="clientConnectOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientConnectOptions"></a>

```typescript
public readonly clientConnectOptions: Ec2ClientVpnEndpointClientConnectOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

The options for managing connection authorization for new client connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}

---

##### `clientLoginBannerOptions`<sup>Optional</sup> <a name="clientLoginBannerOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientLoginBannerOptions"></a>

```typescript
public readonly clientLoginBannerOptions: Ec2ClientVpnEndpointClientLoginBannerOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}

---

##### `clientRouteEnforcementOptions`<sup>Optional</sup> <a name="clientRouteEnforcementOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.clientRouteEnforcementOptions"></a>

```typescript
public readonly clientRouteEnforcementOptions: Ec2ClientVpnEndpointClientRouteEnforcementOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN.

This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}

---

##### `devicePostureOptions`<sup>Optional</sup> <a name="devicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.devicePostureOptions"></a>

```typescript
public readonly devicePostureOptions: Ec2ClientVpnEndpointDevicePostureOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

The device-posture trust providers to associate with the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options Ec2ClientVpnEndpoint#device_posture_options}

---

##### `disconnectOnSessionTimeout`<sup>Optional</sup> <a name="disconnectOnSessionTimeout" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.disconnectOnSessionTimeout"></a>

```typescript
public readonly disconnectOnSessionTimeout: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached.

If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

Information about the DNS servers to be used for DNS resolution.

A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}

---

##### `endpointIpAddressType`<sup>Optional</sup> <a name="endpointIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The IDs of one or more security groups to apply to the target network.

You must also specify the ID of the VPC that contains the security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}

---

##### `selfServicePortal`<sup>Optional</sup> <a name="selfServicePortal" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.selfServicePortal"></a>

```typescript
public readonly selfServicePortal: string;
```

- *Type:* string

Specify whether to enable the self-service portal for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}

---

##### `sessionTimeoutHours`<sup>Optional</sup> <a name="sessionTimeoutHours" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.sessionTimeoutHours"></a>

```typescript
public readonly sessionTimeoutHours: number;
```

- *Type:* number

The maximum VPN session duration time in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}

---

##### `splitTunnel`<sup>Optional</sup> <a name="splitTunnel" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.splitTunnel"></a>

```typescript
public readonly splitTunnel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IResolvable | Ec2ClientVpnEndpointTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

The tags to apply to the Client VPN endpoint during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications Ec2ClientVpnEndpoint#tag_specifications}

---

##### `trafficIpAddressType`<sup>Optional</sup> <a name="trafficIpAddressType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.trafficIpAddressType"></a>

```typescript
public readonly trafficIpAddressType: string;
```

- *Type:* string

The IP address type of the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}

---

##### `transitGatewayConfiguration`<sup>Optional</sup> <a name="transitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transitGatewayConfiguration"></a>

```typescript
public readonly transitGatewayConfiguration: Ec2ClientVpnEndpointTransitGatewayConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: string;
```

- *Type:* string

The transport protocol to be used by the VPN session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC to associate with the Client VPN endpoint.

If no security group IDs are specified in the request, the default security group for the VPC is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}

---

##### `vpnPort`<sup>Optional</sup> <a name="vpnPort" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConfig.property.vpnPort"></a>

```typescript
public readonly vpnPort: number;
```

- *Type:* number

The port number to assign to the Client VPN endpoint for TCP and UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}

---

### Ec2ClientVpnEndpointConnectionLogOptions <a name="Ec2ClientVpnEndpointConnectionLogOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointConnectionLogOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext">includeAuthorizationPolicyContext</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether authorization-policy evaluation context is included in the connection logs. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}.

---

##### `cloudwatchLogGroup`<sup>Optional</sup> <a name="cloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogGroup"></a>

```typescript
public readonly cloudwatchLogGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}.

---

##### `cloudwatchLogStream`<sup>Optional</sup> <a name="cloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.cloudwatchLogStream"></a>

```typescript
public readonly cloudwatchLogStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}.

---

##### `includeAuthorizationPolicyContext`<sup>Optional</sup> <a name="includeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions.property.includeAuthorizationPolicyContext"></a>

```typescript
public readonly includeAuthorizationPolicyContext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether authorization-policy evaluation context is included in the connection logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context Ec2ClientVpnEndpoint#include_authorization_policy_context}

---

### Ec2ClientVpnEndpointDevicePostureOptions <a name="Ec2ClientVpnEndpointDevicePostureOptions" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointDevicePostureOptions: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether device posture is enabled for the Client VPN endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders">trustProviders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | The device-posture trust providers. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether device posture is enabled for the Client VPN endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}

---

##### `trustProviders`<sup>Optional</sup> <a name="trustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions.property.trustProviders"></a>

```typescript
public readonly trustProviders: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

The device-posture trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers Ec2ClientVpnEndpoint#trust_providers}

---

### Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointDevicePostureOptionsTrustProviders: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl">publicSigningKeyUrl</a></code> | <code>string</code> | The URL of the public signing key. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId">tenantId</a></code> | <code>string</code> | The tenant identifier registered with the trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | The device-posture trust provider type. |

---

##### `publicSigningKeyUrl`<sup>Optional</sup> <a name="publicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.publicSigningKeyUrl"></a>

```typescript
public readonly publicSigningKeyUrl: string;
```

- *Type:* string

The URL of the public signing key.

Conditionally required by the provider type and enforced server-side (crowdstrike/jumpcloud require it, jamf rejects it).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#public_signing_key_url Ec2ClientVpnEndpoint#public_signing_key_url}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The tenant identifier registered with the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tenant_id Ec2ClientVpnEndpoint#tenant_id}

---

##### `trustProviderType`<sup>Optional</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

The device-posture trust provider type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_provider_type Ec2ClientVpnEndpoint#trust_provider_type}

---

### Ec2ClientVpnEndpointTagSpecifications <a name="Ec2ClientVpnEndpointTagSpecifications" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointTagSpecifications: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}.

---

### Ec2ClientVpnEndpointTagSpecificationsTags <a name="Ec2ClientVpnEndpointTagSpecificationsTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointTagSpecificationsTags: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}.

---

### Ec2ClientVpnEndpointTransitGatewayConfiguration <a name="Ec2ClientVpnEndpointTransitGatewayConfiguration" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

const ec2ClientVpnEndpointTransitGatewayConfiguration: ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}. |

---

##### `availabilityZoneIds`<sup>Optional</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn">resetSamlProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn">resetSelfServiceSamlProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSamlProviderArn` <a name="resetSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSamlProviderArn"></a>

```typescript
public resetSamlProviderArn(): void
```

##### `resetSelfServiceSamlProviderArn` <a name="resetSelfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.resetSelfServiceSamlProviderArn"></a>

```typescript
public resetSelfServiceSamlProviderArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput">samlProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput">selfServiceSamlProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn">samlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn">selfServiceSamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samlProviderArnInput`<sup>Optional</sup> <a name="samlProviderArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArnInput"></a>

```typescript
public readonly samlProviderArnInput: string;
```

- *Type:* string

---

##### `selfServiceSamlProviderArnInput`<sup>Optional</sup> <a name="selfServiceSamlProviderArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArnInput"></a>

```typescript
public readonly selfServiceSamlProviderArnInput: string;
```

- *Type:* string

---

##### `samlProviderArn`<sup>Required</sup> <a name="samlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.samlProviderArn"></a>

```typescript
public readonly samlProviderArn: string;
```

- *Type:* string

---

##### `selfServiceSamlProviderArn`<sup>Required</sup> <a name="selfServiceSamlProviderArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.selfServiceSamlProviderArn"></a>

```typescript
public readonly selfServiceSamlProviderArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsList <a name="Ec2ClientVpnEndpointAuthenticationOptionsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```typescript
public get(index: number): Ec2ClientVpnEndpointAuthenticationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>[]

---


### Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn">resetClientRootCertificateChainArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientRootCertificateChainArn` <a name="resetClientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.resetClientRootCertificateChainArn"></a>

```typescript
public resetClientRootCertificateChainArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput">clientRootCertificateChainArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn">clientRootCertificateChainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientRootCertificateChainArnInput`<sup>Optional</sup> <a name="clientRootCertificateChainArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArnInput"></a>

```typescript
public readonly clientRootCertificateChainArnInput: string;
```

- *Type:* string

---

##### `clientRootCertificateChainArn`<sup>Required</sup> <a name="clientRootCertificateChainArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.clientRootCertificateChainArn"></a>

```typescript
public readonly clientRootCertificateChainArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---


### Ec2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="Ec2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication">putFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication">putMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication">resetFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication">resetMutualAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---

##### `putFederatedAuthentication` <a name="putFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication"></a>

```typescript
public putFederatedAuthentication(value: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putFederatedAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---

##### `putMutualAuthentication` <a name="putMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication"></a>

```typescript
public putMutualAuthentication(value: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetFederatedAuthentication` <a name="resetFederatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetFederatedAuthentication"></a>

```typescript
public resetFederatedAuthentication(): void
```

##### `resetMutualAuthentication` <a name="resetMutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.resetMutualAuthentication"></a>

```typescript
public resetMutualAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication">federatedAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput">federatedAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput">mutualAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference</a>

---

##### `federatedAuthentication`<sup>Required</sup> <a name="federatedAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthentication"></a>

```typescript
public readonly federatedAuthentication: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference</a>

---

##### `mutualAuthentication`<sup>Required</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthentication"></a>

```typescript
public readonly mutualAuthentication: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory">Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory</a>

---

##### `federatedAuthenticationInput`<sup>Optional</sup> <a name="federatedAuthenticationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.federatedAuthenticationInput"></a>

```typescript
public readonly federatedAuthenticationInput: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication</a>

---

##### `mutualAuthenticationInput`<sup>Optional</sup> <a name="mutualAuthenticationInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.mutualAuthenticationInput"></a>

```typescript
public readonly mutualAuthenticationInput: IResolvable | Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication">Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthenticationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthenticationOptions">Ec2ClientVpnEndpointAuthenticationOptions</a>

---


### Ec2ClientVpnEndpointAuthorizationPolicyOutputReference <a name="Ec2ClientVpnEndpointAuthorizationPolicyOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode">resetShadowMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetShadowMode` <a name="resetShadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.resetShadowMode"></a>

```typescript
public resetShadowMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput">shadowModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode">shadowMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `shadowModeInput`<sup>Optional</sup> <a name="shadowModeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowModeInput"></a>

```typescript
public readonly shadowModeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `shadowMode`<sup>Required</sup> <a name="shadowMode" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.shadowMode"></a>

```typescript
public readonly shadowMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointAuthorizationPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointAuthorizationPolicy">Ec2ClientVpnEndpointAuthorizationPolicy</a>

---


### Ec2ClientVpnEndpointClientConnectOptionsOutputReference <a name="Ec2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.resetLambdaFunctionArn"></a>

```typescript
public resetLambdaFunctionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArnInput"></a>

```typescript
public readonly lambdaFunctionArnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointClientConnectOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientConnectOptions">Ec2ClientVpnEndpointClientConnectOptions</a>

---


### Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText">resetBannerText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBannerText` <a name="resetBannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetBannerText"></a>

```typescript
public resetBannerText(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput">bannerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">bannerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannerTextInput`<sup>Optional</sup> <a name="bannerTextInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerTextInput"></a>

```typescript
public readonly bannerTextInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bannerText`<sup>Required</sup> <a name="bannerText" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```typescript
public readonly bannerText: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointClientLoginBannerOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientLoginBannerOptions">Ec2ClientVpnEndpointClientLoginBannerOptions</a>

---


### Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference <a name="Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced">resetEnforced</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforced` <a name="resetEnforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.resetEnforced"></a>

```typescript
public resetEnforced(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced">enforced</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointClientRouteEnforcementOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointClientRouteEnforcementOptions">Ec2ClientVpnEndpointClientRouteEnforcementOptions</a>

---


### Ec2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="Ec2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup">resetCloudwatchLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream">resetCloudwatchLogStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext">resetIncludeAuthorizationPolicyContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogGroup` <a name="resetCloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogGroup"></a>

```typescript
public resetCloudwatchLogGroup(): void
```

##### `resetCloudwatchLogStream` <a name="resetCloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetCloudwatchLogStream"></a>

```typescript
public resetCloudwatchLogStream(): void
```

##### `resetIncludeAuthorizationPolicyContext` <a name="resetIncludeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.resetIncludeAuthorizationPolicyContext"></a>

```typescript
public resetIncludeAuthorizationPolicyContext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput">cloudwatchLogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput">cloudwatchLogStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput">includeAuthorizationPolicyContextInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">cloudwatchLogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext">includeAuthorizationPolicyContext</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupInput`<sup>Optional</sup> <a name="cloudwatchLogGroupInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroupInput"></a>

```typescript
public readonly cloudwatchLogGroupInput: string;
```

- *Type:* string

---

##### `cloudwatchLogStreamInput`<sup>Optional</sup> <a name="cloudwatchLogStreamInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStreamInput"></a>

```typescript
public readonly cloudwatchLogStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeAuthorizationPolicyContextInput`<sup>Optional</sup> <a name="includeAuthorizationPolicyContextInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContextInput"></a>

```typescript
public readonly includeAuthorizationPolicyContextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cloudwatchLogGroup`<sup>Required</sup> <a name="cloudwatchLogGroup" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```typescript
public readonly cloudwatchLogGroup: string;
```

- *Type:* string

---

##### `cloudwatchLogStream`<sup>Required</sup> <a name="cloudwatchLogStream" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```typescript
public readonly cloudwatchLogStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeAuthorizationPolicyContext`<sup>Required</sup> <a name="includeAuthorizationPolicyContext" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.includeAuthorizationPolicyContext"></a>

```typescript
public readonly includeAuthorizationPolicyContext: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointConnectionLogOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointConnectionLogOptions">Ec2ClientVpnEndpointConnectionLogOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders">putTrustProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders">resetTrustProviders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustProviders` <a name="putTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders"></a>

```typescript
public putTrustProviders(value: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.putTrustProviders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTrustProviders` <a name="resetTrustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.resetTrustProviders"></a>

```typescript
public resetTrustProviders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders">trustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput">trustProvidersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustProviders`<sup>Required</sup> <a name="trustProviders" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProviders"></a>

```typescript
public readonly trustProviders: Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList">Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `trustProvidersInput`<sup>Optional</sup> <a name="trustProvidersInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.trustProvidersInput"></a>

```typescript
public readonly trustProvidersInput: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointDevicePostureOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptions">Ec2ClientVpnEndpointDevicePostureOptions</a>

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get"></a>

```typescript
public get(index: number): Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>[]

---


### Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference <a name="Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl">resetPublicSigningKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType">resetTrustProviderType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublicSigningKeyUrl` <a name="resetPublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetPublicSigningKeyUrl"></a>

```typescript
public resetPublicSigningKeyUrl(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTrustProviderType` <a name="resetTrustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.resetTrustProviderType"></a>

```typescript
public resetTrustProviderType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput">publicSigningKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl">publicSigningKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType">trustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicSigningKeyUrlInput`<sup>Optional</sup> <a name="publicSigningKeyUrlInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrlInput"></a>

```typescript
public readonly publicSigningKeyUrlInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```typescript
public readonly trustProviderTypeInput: string;
```

- *Type:* string

---

##### `publicSigningKeyUrl`<sup>Required</sup> <a name="publicSigningKeyUrl" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.publicSigningKeyUrl"></a>

```typescript
public readonly publicSigningKeyUrl: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.trustProviderType"></a>

```typescript
public readonly trustProviderType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders">Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders</a>

---


### Ec2ClientVpnEndpointTagSpecificationsList <a name="Ec2ClientVpnEndpointTagSpecificationsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get"></a>

```typescript
public get(index: number): Ec2ClientVpnEndpointTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>[]

---


### Ec2ClientVpnEndpointTagSpecificationsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: Ec2ClientVpnEndpointTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList">Ec2ClientVpnEndpointTagSpecificationsTagsList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointTagSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecifications">Ec2ClientVpnEndpointTagSpecifications</a>

---


### Ec2ClientVpnEndpointTagSpecificationsTagsList <a name="Ec2ClientVpnEndpointTagSpecificationsTagsList" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>[]

---


### Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference <a name="Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointTagSpecificationsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTagSpecificationsTags">Ec2ClientVpnEndpointTagSpecificationsTags</a>

---


### Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference <a name="Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer"></a>

```typescript
import { ec2ClientVpnEndpoint } from '@cdktn/provider-awscc'

new ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds">resetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneIds` <a name="resetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZoneIds"></a>

```typescript
public resetAvailabilityZoneIds(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput">availabilityZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneIdsInput`<sup>Optional</sup> <a name="availabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIdsInput"></a>

```typescript
public readonly availabilityZoneIdsInput: string[];
```

- *Type:* string[]

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneIds`<sup>Required</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2ClientVpnEndpointTransitGatewayConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ClientVpnEndpoint.Ec2ClientVpnEndpointTransitGatewayConfiguration">Ec2ClientVpnEndpointTransitGatewayConfiguration</a>

---



