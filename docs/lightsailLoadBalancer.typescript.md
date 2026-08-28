# `lightsailLoadBalancer` Submodule <a name="`lightsailLoadBalancer` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancer <a name="LightsailLoadBalancer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer awscc_lightsail_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

new lightsailLoadBalancer.LightsailLoadBalancer(scope: Construct, id: string, config: LightsailLoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig">LightsailLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig">LightsailLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances">resetAttachedInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled">resetSessionStickinessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds">resetSessionStickinessLbCookieDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName">resetTlsPolicyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags"></a>

```typescript
public putTags(value: IResolvable | LightsailLoadBalancerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]

---

##### `resetAttachedInstances` <a name="resetAttachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances"></a>

```typescript
public resetAttachedInstances(): void
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath"></a>

```typescript
public resetHealthCheckPath(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetSessionStickinessEnabled` <a name="resetSessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled"></a>

```typescript
public resetSessionStickinessEnabled(): void
```

##### `resetSessionStickinessLbCookieDurationSeconds` <a name="resetSessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds"></a>

```typescript
public resetSessionStickinessLbCookieDurationSeconds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsPolicyName` <a name="resetTlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName"></a>

```typescript
public resetTlsPolicyName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

lightsailLoadBalancer.LightsailLoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput">attachedInstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput">instancePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput">sessionStickinessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput">sessionStickinessLbCookieDurationSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput">tlsPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances">attachedInstances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort">instancePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled">sessionStickinessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds">sessionStickinessLbCookieDurationSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName">tlsPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags"></a>

```typescript
public readonly tags: LightsailLoadBalancerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a>

---

##### `attachedInstancesInput`<sup>Optional</sup> <a name="attachedInstancesInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput"></a>

```typescript
public readonly attachedInstancesInput: string[];
```

- *Type:* string[]

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput"></a>

```typescript
public readonly healthCheckPathInput: string;
```

- *Type:* string

---

##### `instancePortInput`<sup>Optional</sup> <a name="instancePortInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput"></a>

```typescript
public readonly instancePortInput: number;
```

- *Type:* number

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput"></a>

```typescript
public readonly loadBalancerNameInput: string;
```

- *Type:* string

---

##### `sessionStickinessEnabledInput`<sup>Optional</sup> <a name="sessionStickinessEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput"></a>

```typescript
public readonly sessionStickinessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sessionStickinessLbCookieDurationSecondsInput`<sup>Optional</sup> <a name="sessionStickinessLbCookieDurationSecondsInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput"></a>

```typescript
public readonly sessionStickinessLbCookieDurationSecondsInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LightsailLoadBalancerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]

---

##### `tlsPolicyNameInput`<sup>Optional</sup> <a name="tlsPolicyNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput"></a>

```typescript
public readonly tlsPolicyNameInput: string;
```

- *Type:* string

---

##### `attachedInstances`<sup>Required</sup> <a name="attachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances"></a>

```typescript
public readonly attachedInstances: string[];
```

- *Type:* string[]

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort"></a>

```typescript
public readonly instancePort: number;
```

- *Type:* number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `sessionStickinessEnabled`<sup>Required</sup> <a name="sessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled"></a>

```typescript
public readonly sessionStickinessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sessionStickinessLbCookieDurationSeconds`<sup>Required</sup> <a name="sessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds"></a>

```typescript
public readonly sessionStickinessLbCookieDurationSeconds: string;
```

- *Type:* string

---

##### `tlsPolicyName`<sup>Required</sup> <a name="tlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName"></a>

```typescript
public readonly tlsPolicyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerConfig <a name="LightsailLoadBalancerConfig" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.Initializer"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

const lightsailLoadBalancerConfig: lightsailLoadBalancer.LightsailLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort">instancePort</a></code> | <code>number</code> | The instance port where you're creating your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances">attachedInstances</a></code> | <code>string[]</code> | The names of the instances attached to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | The path you provided to perform the load balancer health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address type for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled">sessionStickinessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Configuration option to enable session stickiness. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds">sessionStickinessLbCookieDurationSeconds</a></code> | <code>string</code> | Configuration option to adjust session stickiness cookie duration parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName">tlsPolicyName</a></code> | <code>string</code> | The name of the TLS policy to apply to the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort"></a>

```typescript
public readonly instancePort: number;
```

- *Type:* number

The instance port where you're creating your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#instance_port LightsailLoadBalancer#instance_port}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#load_balancer_name LightsailLoadBalancer#load_balancer_name}

---

##### `attachedInstances`<sup>Optional</sup> <a name="attachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances"></a>

```typescript
public readonly attachedInstances: string[];
```

- *Type:* string[]

The names of the instances attached to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#attached_instances LightsailLoadBalancer#attached_instances}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

The path you provided to perform the load balancer health check.

If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#health_check_path LightsailLoadBalancer#health_check_path}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address type for the load balancer.

The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#ip_address_type LightsailLoadBalancer#ip_address_type}

---

##### `sessionStickinessEnabled`<sup>Optional</sup> <a name="sessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled"></a>

```typescript
public readonly sessionStickinessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Configuration option to enable session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_enabled LightsailLoadBalancer#session_stickiness_enabled}

---

##### `sessionStickinessLbCookieDurationSeconds`<sup>Optional</sup> <a name="sessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds"></a>

```typescript
public readonly sessionStickinessLbCookieDurationSeconds: string;
```

- *Type:* string

Configuration option to adjust session stickiness cookie duration parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds LightsailLoadBalancer#session_stickiness_lb_cookie_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LightsailLoadBalancerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tags LightsailLoadBalancer#tags}

---

##### `tlsPolicyName`<sup>Optional</sup> <a name="tlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName"></a>

```typescript
public readonly tlsPolicyName: string;
```

- *Type:* string

The name of the TLS policy to apply to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tls_policy_name LightsailLoadBalancer#tls_policy_name}

---

### LightsailLoadBalancerTags <a name="LightsailLoadBalancerTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.Initializer"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

const lightsailLoadBalancerTags: lightsailLoadBalancer.LightsailLoadBalancerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#key LightsailLoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#value LightsailLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailLoadBalancerTagsList <a name="LightsailLoadBalancerTagsList" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

new lightsailLoadBalancer.LightsailLoadBalancerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get"></a>

```typescript
public get(index: number): LightsailLoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailLoadBalancerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>[]

---


### LightsailLoadBalancerTagsOutputReference <a name="LightsailLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer"></a>

```typescript
import { lightsailLoadBalancer } from '@cdktn/provider-awscc'

new lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailLoadBalancerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>

---



