# `route53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`route53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverCoreNetworkEndpoint <a name="Route53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint(scope: Construct, id: string, config: Route53GlobalresolverCoreNetworkEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses">putIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAddresses` <a name="putIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses"></a>

```typescript
public putIpAddresses(value: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions">availableRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">coreNetworkEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput">globalResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput">ipAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availableRegions`<sup>Required</sup> <a name="availableRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```typescript
public readonly availableRegions: string[];
```

- *Type:* string[]

---

##### `coreNetworkEndpointId`<sup>Required</sup> <a name="coreNetworkEndpointId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```typescript
public readonly coreNetworkEndpointId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: Route53GlobalresolverCoreNetworkEndpointIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```typescript
public readonly tags: Route53GlobalresolverCoreNetworkEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput"></a>

```typescript
public readonly coreNetworkArnInput: string;
```

- *Type:* string

---

##### `globalResolverIdInput`<sup>Optional</sup> <a name="globalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput"></a>

```typescript
public readonly globalResolverIdInput: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverCoreNetworkEndpointConfig <a name="Route53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const route53GlobalresolverCoreNetworkEndpointConfig: route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses">ipAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name">name</a></code> | <code>string</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

### Route53GlobalresolverCoreNetworkEndpointIpAddresses <a name="Route53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const route53GlobalresolverCoreNetworkEndpointIpAddresses: route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel">dnsLabel</a></code> | <code>string</code> | Lowercase DNS label for the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope">regionScope</a></code> | <code>string</code> | ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions">regions</a></code> | <code>string[]</code> | Regions that serve the IP address. |

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel"></a>

```typescript
public readonly dnsLabel: string;
```

- *Type:* string

Lowercase DNS label for the IP address.

The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}

---

##### `regionScope`<sup>Required</sup> <a name="regionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope"></a>

```typescript
public readonly regionScope: string;
```

- *Type:* string

ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}.

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Regions that serve the IP address.

Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}

---

### Route53GlobalresolverCoreNetworkEndpointTags <a name="Route53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const route53GlobalresolverCoreNetworkEndpointTags: route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```typescript
public get(index: number): Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>[]

---


### Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address"></a>

```typescript
public resetIpv4Address(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput">dnsLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput">regionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">dnsLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">regionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsLabelInput`<sup>Optional</sup> <a name="dnsLabelInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput"></a>

```typescript
public readonly dnsLabelInput: string;
```

- *Type:* string

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `regionScopeInput`<sup>Optional</sup> <a name="regionScopeInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput"></a>

```typescript
public readonly regionScopeInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```typescript
public readonly dnsLabel: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `regionScope`<sup>Required</sup> <a name="regionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```typescript
public readonly regionScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverCoreNetworkEndpointIpAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### Route53GlobalresolverCoreNetworkEndpointTagsList <a name="Route53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```typescript
public get(index: number): Route53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>[]

---


### Route53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```typescript
import { route53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverCoreNetworkEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>

---



