# `ec2VerifiedAccessEndpoint` Submodule <a name="`ec2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessEndpoint <a name="Ec2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint(scope: Construct, id: string, config: Ec2VerifiedAccessEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig">Ec2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions">putCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions">putLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions">putNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions">putRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain">resetApplicationDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions">resetCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn">resetDomainCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix">resetEndpointDomainPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions">resetLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions">resetNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled">resetPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions">resetRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCidrOptions` <a name="putCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions"></a>

```typescript
public putCidrOptions(value: Ec2VerifiedAccessEndpointCidrOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putCidrOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `putLoadBalancerOptions` <a name="putLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions"></a>

```typescript
public putLoadBalancerOptions(value: Ec2VerifiedAccessEndpointLoadBalancerOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putLoadBalancerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `putNetworkInterfaceOptions` <a name="putNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions"></a>

```typescript
public putNetworkInterfaceOptions(value: Ec2VerifiedAccessEndpointNetworkInterfaceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putNetworkInterfaceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `putRdsOptions` <a name="putRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions"></a>

```typescript
public putRdsOptions(value: Ec2VerifiedAccessEndpointRdsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putRdsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification"></a>

```typescript
public putSseSpecification(value: Ec2VerifiedAccessEndpointSseSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VerifiedAccessEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---

##### `resetApplicationDomain` <a name="resetApplicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetApplicationDomain"></a>

```typescript
public resetApplicationDomain(): void
```

##### `resetCidrOptions` <a name="resetCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetCidrOptions"></a>

```typescript
public resetCidrOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainCertificateArn` <a name="resetDomainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetDomainCertificateArn"></a>

```typescript
public resetDomainCertificateArn(): void
```

##### `resetEndpointDomainPrefix` <a name="resetEndpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetEndpointDomainPrefix"></a>

```typescript
public resetEndpointDomainPrefix(): void
```

##### `resetLoadBalancerOptions` <a name="resetLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetLoadBalancerOptions"></a>

```typescript
public resetLoadBalancerOptions(): void
```

##### `resetNetworkInterfaceOptions` <a name="resetNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetNetworkInterfaceOptions"></a>

```typescript
public resetNetworkInterfaceOptions(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetPolicyEnabled` <a name="resetPolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetPolicyEnabled"></a>

```typescript
public resetPolicyEnabled(): void
```

##### `resetRdsOptions` <a name="resetRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetRdsOptions"></a>

```typescript
public resetRdsOptions(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetSseSpecification"></a>

```typescript
public resetSseSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions">cidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain">deviceValidationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain">endpointDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions">loadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions">networkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions">rdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">verifiedAccessEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput">applicationDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput">attachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput">cidrOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput">domainCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput">endpointDomainPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput">loadBalancerOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput">networkInterfaceOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput">policyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput">rdsOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput">verifiedAccessGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain">applicationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn">domainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix">endpointDomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId">verifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidrOptions`<sup>Required</sup> <a name="cidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptions"></a>

```typescript
public readonly cidrOptions: Ec2VerifiedAccessEndpointCidrOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference">Ec2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deviceValidationDomain`<sup>Required</sup> <a name="deviceValidationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```typescript
public readonly deviceValidationDomain: string;
```

- *Type:* string

---

##### `endpointDomain`<sup>Required</sup> <a name="endpointDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomain"></a>

```typescript
public readonly endpointDomain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `loadBalancerOptions`<sup>Required</sup> <a name="loadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```typescript
public readonly loadBalancerOptions: Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `networkInterfaceOptions`<sup>Required</sup> <a name="networkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```typescript
public readonly networkInterfaceOptions: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `rdsOptions`<sup>Required</sup> <a name="rdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptions"></a>

```typescript
public readonly rdsOptions: Ec2VerifiedAccessEndpointRdsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference">Ec2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessEndpointSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference">Ec2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tags"></a>

```typescript
public readonly tags: Ec2VerifiedAccessEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList">Ec2VerifiedAccessEndpointTagsList</a>

---

##### `verifiedAccessEndpointId`<sup>Required</sup> <a name="verifiedAccessEndpointId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```typescript
public readonly verifiedAccessEndpointId: string;
```

- *Type:* string

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

---

##### `applicationDomainInput`<sup>Optional</sup> <a name="applicationDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomainInput"></a>

```typescript
public readonly applicationDomainInput: string;
```

- *Type:* string

---

##### `attachmentTypeInput`<sup>Optional</sup> <a name="attachmentTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentTypeInput"></a>

```typescript
public readonly attachmentTypeInput: string;
```

- *Type:* string

---

##### `cidrOptionsInput`<sup>Optional</sup> <a name="cidrOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.cidrOptionsInput"></a>

```typescript
public readonly cidrOptionsInput: IResolvable | Ec2VerifiedAccessEndpointCidrOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainCertificateArnInput`<sup>Optional</sup> <a name="domainCertificateArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArnInput"></a>

```typescript
public readonly domainCertificateArnInput: string;
```

- *Type:* string

---

##### `endpointDomainPrefixInput`<sup>Optional</sup> <a name="endpointDomainPrefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefixInput"></a>

```typescript
public readonly endpointDomainPrefixInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerOptionsInput`<sup>Optional</sup> <a name="loadBalancerOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.loadBalancerOptionsInput"></a>

```typescript
public readonly loadBalancerOptionsInput: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---

##### `networkInterfaceOptionsInput`<sup>Optional</sup> <a name="networkInterfaceOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.networkInterfaceOptionsInput"></a>

```typescript
public readonly networkInterfaceOptionsInput: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyEnabledInput`<sup>Optional</sup> <a name="policyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabledInput"></a>

```typescript
public readonly policyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rdsOptionsInput`<sup>Optional</sup> <a name="rdsOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.rdsOptionsInput"></a>

```typescript
public readonly rdsOptionsInput: IResolvable | Ec2VerifiedAccessEndpointRdsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.sseSpecificationInput"></a>

```typescript
public readonly sseSpecificationInput: IResolvable | Ec2VerifiedAccessEndpointSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VerifiedAccessEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---

##### `verifiedAccessGroupIdInput`<sup>Optional</sup> <a name="verifiedAccessGroupIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```typescript
public readonly verifiedAccessGroupIdInput: string;
```

- *Type:* string

---

##### `applicationDomain`<sup>Required</sup> <a name="applicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.applicationDomain"></a>

```typescript
public readonly applicationDomain: string;
```

- *Type:* string

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainCertificateArn`<sup>Required</sup> <a name="domainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```typescript
public readonly domainCertificateArn: string;
```

- *Type:* string

---

##### `endpointDomainPrefix`<sup>Required</sup> <a name="endpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```typescript
public readonly endpointDomainPrefix: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyEnabled`<sup>Required</sup> <a name="policyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `verifiedAccessGroupId`<sup>Required</sup> <a name="verifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```typescript
public readonly verifiedAccessGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessEndpointCidrOptions <a name="Ec2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointCidrOptions: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr">cidr</a></code> | <code>string</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges">portRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#cidr Ec2VerifiedAccessEndpoint#cidr}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.portRanges"></a>

```typescript
public readonly portRanges: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointCidrOptionsPortRanges <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointCidrOptionsPortRanges: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort">toPort</a></code> | <code>number</code> | The last port in the range. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointConfig <a name="Ec2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointConfig: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType">attachmentType</a></code> | <code>string</code> | The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | The type of AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId">verifiedAccessGroupId</a></code> | <code>string</code> | The ID of the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain">applicationDomain</a></code> | <code>string</code> | The DNS name for users to reach your application. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions">cidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | The options for cidr type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description">description</a></code> | <code>string</code> | A description for the AWS Verified Access endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn">domainCertificateArn</a></code> | <code>string</code> | The ARN of a public TLS/SSL certificate imported into or created with ACM. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix">endpointDomainPrefix</a></code> | <code>string</code> | A custom identifier that gets prepended to a DNS name that is generated for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions">loadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | The load balancer details if creating the AWS Verified Access endpoint as load-balancer type. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions">networkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | The options for network-interface type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions">rdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | The options for rds type endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#attachment_type Ec2VerifiedAccessEndpoint#attachment_type}

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of AWS Verified Access endpoint.

Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#endpoint_type Ec2VerifiedAccessEndpoint#endpoint_type}

---

##### `verifiedAccessGroupId`<sup>Required</sup> <a name="verifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.verifiedAccessGroupId"></a>

```typescript
public readonly verifiedAccessGroupId: string;
```

- *Type:* string

The ID of the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#verified_access_group_id Ec2VerifiedAccessEndpoint#verified_access_group_id}

---

##### `applicationDomain`<sup>Optional</sup> <a name="applicationDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.applicationDomain"></a>

```typescript
public readonly applicationDomain: string;
```

- *Type:* string

The DNS name for users to reach your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#application_domain Ec2VerifiedAccessEndpoint#application_domain}

---

##### `cidrOptions`<sup>Optional</sup> <a name="cidrOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.cidrOptions"></a>

```typescript
public readonly cidrOptions: Ec2VerifiedAccessEndpointCidrOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

The options for cidr type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#cidr_options Ec2VerifiedAccessEndpoint#cidr_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the AWS Verified Access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#description Ec2VerifiedAccessEndpoint#description}

---

##### `domainCertificateArn`<sup>Optional</sup> <a name="domainCertificateArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.domainCertificateArn"></a>

```typescript
public readonly domainCertificateArn: string;
```

- *Type:* string

The ARN of a public TLS/SSL certificate imported into or created with ACM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#domain_certificate_arn Ec2VerifiedAccessEndpoint#domain_certificate_arn}

---

##### `endpointDomainPrefix`<sup>Optional</sup> <a name="endpointDomainPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.endpointDomainPrefix"></a>

```typescript
public readonly endpointDomainPrefix: string;
```

- *Type:* string

A custom identifier that gets prepended to a DNS name that is generated for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#endpoint_domain_prefix Ec2VerifiedAccessEndpoint#endpoint_domain_prefix}

---

##### `loadBalancerOptions`<sup>Optional</sup> <a name="loadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.loadBalancerOptions"></a>

```typescript
public readonly loadBalancerOptions: Ec2VerifiedAccessEndpointLoadBalancerOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#load_balancer_options Ec2VerifiedAccessEndpoint#load_balancer_options}

---

##### `networkInterfaceOptions`<sup>Optional</sup> <a name="networkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.networkInterfaceOptions"></a>

```typescript
public readonly networkInterfaceOptions: Ec2VerifiedAccessEndpointNetworkInterfaceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

The options for network-interface type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#network_interface_options Ec2VerifiedAccessEndpoint#network_interface_options}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#policy_document Ec2VerifiedAccessEndpoint#policy_document}

---

##### `policyEnabled`<sup>Optional</sup> <a name="policyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#policy_enabled Ec2VerifiedAccessEndpoint#policy_enabled}

---

##### `rdsOptions`<sup>Optional</sup> <a name="rdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.rdsOptions"></a>

```typescript
public readonly rdsOptions: Ec2VerifiedAccessEndpointRdsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

The options for rds type endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#rds_options Ec2VerifiedAccessEndpoint#rds_options}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The IDs of the security groups for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#security_group_ids Ec2VerifiedAccessEndpoint#security_group_ids}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessEndpointSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#sse_specification Ec2VerifiedAccessEndpoint#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VerifiedAccessEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#tags Ec2VerifiedAccessEndpoint#tags}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptions <a name="Ec2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointLoadBalancerOptions: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | The ARN of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port">port</a></code> | <code>number</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges">portRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | The list of port range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `loadBalancerArn`<sup>Optional</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

The ARN of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#load_balancer_arn Ec2VerifiedAccessEndpoint#load_balancer_arn}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.portRanges"></a>

```typescript
public readonly portRanges: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

The list of port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort">toPort</a></code> | <code>number</code> | The last port in the range. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptions <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointNetworkInterfaceOptions: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port">port</a></code> | <code>number</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges">portRanges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | The list of port ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol. |

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#network_interface_id Ec2VerifiedAccessEndpoint#network_interface_id}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.portRanges"></a>

```typescript
public readonly portRanges: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

The list of port ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port_ranges Ec2VerifiedAccessEndpoint#port_ranges}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort">fromPort</a></code> | <code>number</code> | The first port in the range. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort">toPort</a></code> | <code>number</code> | The last port in the range. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

The first port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#from_port Ec2VerifiedAccessEndpoint#from_port}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

The last port in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#to_port Ec2VerifiedAccessEndpoint#to_port}

---

### Ec2VerifiedAccessEndpointRdsOptions <a name="Ec2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointRdsOptions: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port">port</a></code> | <code>number</code> | The IP port number. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn">rdsDbClusterArn</a></code> | <code>string</code> | The ARN of the RDS DB cluster. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn">rdsDbInstanceArn</a></code> | <code>string</code> | The ARN of the RDS DB instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn">rdsDbProxyArn</a></code> | <code>string</code> | The ARN of the RDS DB proxy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint">rdsEndpoint</a></code> | <code>string</code> | The RDS endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The IDs of the subnets. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The IP port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#port Ec2VerifiedAccessEndpoint#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#protocol Ec2VerifiedAccessEndpoint#protocol}

---

##### `rdsDbClusterArn`<sup>Optional</sup> <a name="rdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```typescript
public readonly rdsDbClusterArn: string;
```

- *Type:* string

The ARN of the RDS DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#rds_db_cluster_arn Ec2VerifiedAccessEndpoint#rds_db_cluster_arn}

---

##### `rdsDbInstanceArn`<sup>Optional</sup> <a name="rdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```typescript
public readonly rdsDbInstanceArn: string;
```

- *Type:* string

The ARN of the RDS DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#rds_db_instance_arn Ec2VerifiedAccessEndpoint#rds_db_instance_arn}

---

##### `rdsDbProxyArn`<sup>Optional</sup> <a name="rdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```typescript
public readonly rdsDbProxyArn: string;
```

- *Type:* string

The ARN of the RDS DB proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#rds_db_proxy_arn Ec2VerifiedAccessEndpoint#rds_db_proxy_arn}

---

##### `rdsEndpoint`<sup>Optional</sup> <a name="rdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.rdsEndpoint"></a>

```typescript
public readonly rdsEndpoint: string;
```

- *Type:* string

The RDS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#rds_endpoint Ec2VerifiedAccessEndpoint#rds_endpoint}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The IDs of the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#subnet_ids Ec2VerifiedAccessEndpoint#subnet_ids}

---

### Ec2VerifiedAccessEndpointSseSpecification <a name="Ec2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointSseSpecification: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#customer_managed_key_enabled Ec2VerifiedAccessEndpoint#customer_managed_key_enabled}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#kms_key_arn Ec2VerifiedAccessEndpoint#kms_key_arn}

---

### Ec2VerifiedAccessEndpointTags <a name="Ec2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

const ec2VerifiedAccessEndpointTags: ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#key Ec2VerifiedAccessEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_endpoint#value Ec2VerifiedAccessEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessEndpointCidrOptionsOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges">putPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRanges` <a name="putPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges"></a>

```typescript
public putPortRanges(value: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: Ec2VerifiedAccessEndpointCidrOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList">Ec2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointCidrOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptions">Ec2VerifiedAccessEndpointCidrOptions</a>

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointCidrOptionsPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointCidrOptionsPortRanges">Ec2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges">putPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">resetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRanges` <a name="putPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges"></a>

```typescript
public putPortRanges(value: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---

##### `resetLoadBalancerArn` <a name="resetLoadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```typescript
public resetLoadBalancerArn(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```typescript
public readonly loadBalancerArnInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptions">Ec2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">Ec2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges">putPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRanges` <a name="putPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges"></a>

```typescript
public putPortRanges(value: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.putPortRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">portRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptions">Ec2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>[]

---


### Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resetToPort"></a>

```typescript
public resetToPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">Ec2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### Ec2VerifiedAccessEndpointRdsOptionsOutputReference <a name="Ec2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">resetRdsDbClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">resetRdsDbInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">resetRdsDbProxyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">resetRdsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRdsDbClusterArn` <a name="resetRdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```typescript
public resetRdsDbClusterArn(): void
```

##### `resetRdsDbInstanceArn` <a name="resetRdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```typescript
public resetRdsDbInstanceArn(): void
```

##### `resetRdsDbProxyArn` <a name="resetRdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```typescript
public resetRdsDbProxyArn(): void
```

##### `resetRdsEndpoint` <a name="resetRdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```typescript
public resetRdsEndpoint(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">rdsDbClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">rdsDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">rdsDbProxyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">rdsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">rdsDbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">rdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">rdsDbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">rdsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `rdsDbClusterArnInput`<sup>Optional</sup> <a name="rdsDbClusterArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```typescript
public readonly rdsDbClusterArnInput: string;
```

- *Type:* string

---

##### `rdsDbInstanceArnInput`<sup>Optional</sup> <a name="rdsDbInstanceArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```typescript
public readonly rdsDbInstanceArnInput: string;
```

- *Type:* string

---

##### `rdsDbProxyArnInput`<sup>Optional</sup> <a name="rdsDbProxyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```typescript
public readonly rdsDbProxyArnInput: string;
```

- *Type:* string

---

##### `rdsEndpointInput`<sup>Optional</sup> <a name="rdsEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```typescript
public readonly rdsEndpointInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `rdsDbClusterArn`<sup>Required</sup> <a name="rdsDbClusterArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```typescript
public readonly rdsDbClusterArn: string;
```

- *Type:* string

---

##### `rdsDbInstanceArn`<sup>Required</sup> <a name="rdsDbInstanceArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```typescript
public readonly rdsDbInstanceArn: string;
```

- *Type:* string

---

##### `rdsDbProxyArn`<sup>Required</sup> <a name="rdsDbProxyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```typescript
public readonly rdsDbProxyArn: string;
```

- *Type:* string

---

##### `rdsEndpoint`<sup>Required</sup> <a name="rdsEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```typescript
public readonly rdsEndpoint: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointRdsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointRdsOptions">Ec2VerifiedAccessEndpointRdsOptions</a>

---


### Ec2VerifiedAccessEndpointSseSpecificationOutputReference <a name="Ec2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointSseSpecification">Ec2VerifiedAccessEndpointSseSpecification</a>

---


### Ec2VerifiedAccessEndpointTagsList <a name="Ec2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>[]

---


### Ec2VerifiedAccessEndpointTagsOutputReference <a name="Ec2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessEndpoint } from '@cdktn/provider-awscc'

new ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessEndpoint.Ec2VerifiedAccessEndpointTags">Ec2VerifiedAccessEndpointTags</a>

---



