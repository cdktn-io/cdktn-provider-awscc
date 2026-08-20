# `route53ResolverResolverEndpoint` Submodule <a name="`route53ResolverResolverEndpoint` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverEndpoint <a name="Route53ResolverResolverEndpoint" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

new route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint(scope: Construct, id: string, config: Route53ResolverResolverEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig">Route53ResolverResolverEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig">Route53ResolverResolverEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses">putIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled">resetDns64Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled">resetIpv6InternetAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn">resetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType">resetPreferredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType">resetResolverEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled">resetRniEnhancedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled">resetTargetNameServerMetricsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAddresses` <a name="putIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses"></a>

```typescript
public putIpAddresses(value: IResolvable | Route53ResolverResolverEndpointIpAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53ResolverResolverEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]

---

##### `resetDns64Enabled` <a name="resetDns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled"></a>

```typescript
public resetDns64Enabled(): void
```

##### `resetIpv6InternetAccessEnabled` <a name="resetIpv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled"></a>

```typescript
public resetIpv6InternetAccessEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOutpostArn` <a name="resetOutpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn"></a>

```typescript
public resetOutpostArn(): void
```

##### `resetPreferredInstanceType` <a name="resetPreferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType"></a>

```typescript
public resetPreferredInstanceType(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetResolverEndpointType` <a name="resetResolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType"></a>

```typescript
public resetResolverEndpointType(): void
```

##### `resetRniEnhancedMetricsEnabled` <a name="resetRniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled"></a>

```typescript
public resetRniEnhancedMetricsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetNameServerMetricsEnabled` <a name="resetTargetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled"></a>

```typescript
public resetTargetNameServerMetricsEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverResolverEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId">hostVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount">ipAddressCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId">resolverEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput">dns64EnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput">ipAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput">ipv6InternetAccessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput">outpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput">preferredInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput">resolverEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput">rniEnhancedMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput">targetNameServerMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled">dns64Enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled">ipv6InternetAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType">preferredInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType">resolverEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled">rniEnhancedMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled">targetNameServerMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hostVpcId`<sup>Required</sup> <a name="hostVpcId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId"></a>

```typescript
public readonly hostVpcId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressCount`<sup>Required</sup> <a name="ipAddressCount" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount"></a>

```typescript
public readonly ipAddressCount: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: Route53ResolverResolverEndpointIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a>

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId"></a>

```typescript
public readonly resolverEndpointId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags"></a>

```typescript
public readonly tags: Route53ResolverResolverEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `dns64EnabledInput`<sup>Optional</sup> <a name="dns64EnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput"></a>

```typescript
public readonly dns64EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: IResolvable | Route53ResolverResolverEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]

---

##### `ipv6InternetAccessEnabledInput`<sup>Optional</sup> <a name="ipv6InternetAccessEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput"></a>

```typescript
public readonly ipv6InternetAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outpostArnInput`<sup>Optional</sup> <a name="outpostArnInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput"></a>

```typescript
public readonly outpostArnInput: string;
```

- *Type:* string

---

##### `preferredInstanceTypeInput`<sup>Optional</sup> <a name="preferredInstanceTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput"></a>

```typescript
public readonly preferredInstanceTypeInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `resolverEndpointTypeInput`<sup>Optional</sup> <a name="resolverEndpointTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput"></a>

```typescript
public readonly resolverEndpointTypeInput: string;
```

- *Type:* string

---

##### `rniEnhancedMetricsEnabledInput`<sup>Optional</sup> <a name="rniEnhancedMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput"></a>

```typescript
public readonly rniEnhancedMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53ResolverResolverEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]

---

##### `targetNameServerMetricsEnabledInput`<sup>Optional</sup> <a name="targetNameServerMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput"></a>

```typescript
public readonly targetNameServerMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `dns64Enabled`<sup>Required</sup> <a name="dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled"></a>

```typescript
public readonly dns64Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipv6InternetAccessEnabled`<sup>Required</sup> <a name="ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled"></a>

```typescript
public readonly ipv6InternetAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `preferredInstanceType`<sup>Required</sup> <a name="preferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType"></a>

```typescript
public readonly preferredInstanceType: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `resolverEndpointType`<sup>Required</sup> <a name="resolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType"></a>

```typescript
public readonly resolverEndpointType: string;
```

- *Type:* string

---

##### `rniEnhancedMetricsEnabled`<sup>Required</sup> <a name="rniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled"></a>

```typescript
public readonly rniEnhancedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `targetNameServerMetricsEnabled`<sup>Required</sup> <a name="targetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled"></a>

```typescript
public readonly targetNameServerMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverEndpointConfig <a name="Route53ResolverResolverEndpointConfig" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

const route53ResolverResolverEndpointConfig: route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction">direction</a></code> | <code>string</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses">ipAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]</code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled">dns64Enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled">ipv6InternetAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name">name</a></code> | <code>string</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn">outpostArn</a></code> | <code>string</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType">preferredInstanceType</a></code> | <code>string</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType">resolverEndpointType</a></code> | <code>string</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled">rniEnhancedMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled">targetNameServerMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IResolvable | Route53ResolverResolverEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `dns64Enabled`<sup>Optional</sup> <a name="dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled"></a>

```typescript
public readonly dns64Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `ipv6InternetAccessEnabled`<sup>Optional</sup> <a name="ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled"></a>

```typescript
public readonly ipv6InternetAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `preferredInstanceType`<sup>Optional</sup> <a name="preferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType"></a>

```typescript
public readonly preferredInstanceType: string;
```

- *Type:* string

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `resolverEndpointType`<sup>Optional</sup> <a name="resolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType"></a>

```typescript
public readonly resolverEndpointType: string;
```

- *Type:* string

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `rniEnhancedMetricsEnabled`<sup>Optional</sup> <a name="rniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled"></a>

```typescript
public readonly rniEnhancedMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53ResolverResolverEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `targetNameServerMetricsEnabled`<sup>Optional</sup> <a name="targetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled"></a>

```typescript
public readonly targetNameServerMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

### Route53ResolverResolverEndpointIpAddresses <a name="Route53ResolverResolverEndpointIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

const route53ResolverResolverEndpointIpAddresses: route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet that contains the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip">ip</a></code> | <code>string</code> | The IPv4 address that you want to use for DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6">ipv6</a></code> | <code>string</code> | The IPv6 address that you want to use for DNS queries. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet that contains the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#subnet_id Route53ResolverResolverEndpoint#subnet_id}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

The IPv4 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ip Route53ResolverResolverEndpoint#ip}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

The IPv6 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#ipv_6 Route53ResolverResolverEndpoint#ipv_6}

---

### Route53ResolverResolverEndpointTags <a name="Route53ResolverResolverEndpointTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

const route53ResolverResolverEndpointTags: route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key">key</a></code> | <code>string</code> | The name for the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name for the tag.

For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#key Route53ResolverResolverEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53resolver_resolver_endpoint#value Route53ResolverResolverEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverEndpointIpAddressesList <a name="Route53ResolverResolverEndpointIpAddressesList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

new route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get"></a>

```typescript
public get(index: number): Route53ResolverResolverEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>[]

---


### Route53ResolverResolverEndpointIpAddressesOutputReference <a name="Route53ResolverResolverEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

new route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIp` <a name="resetIp" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverEndpointIpAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses">Route53ResolverResolverEndpointIpAddresses</a>

---


### Route53ResolverResolverEndpointTagsList <a name="Route53ResolverResolverEndpointTagsList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

new route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get"></a>

```typescript
public get(index: number): Route53ResolverResolverEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>[]

---


### Route53ResolverResolverEndpointTagsOutputReference <a name="Route53ResolverResolverEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer"></a>

```typescript
import { route53ResolverResolverEndpoint } from '@cdktn/provider-awscc'

new route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ResolverResolverEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags">Route53ResolverResolverEndpointTags</a>

---



