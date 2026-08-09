# `route53GlobalresolverGlobalResolver` Submodule <a name="`route53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverGlobalResolver <a name="Route53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

new route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver(scope: Construct, id: string, config: Route53GlobalresolverGlobalResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig">Route53GlobalresolverGlobalResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig">Route53GlobalresolverGlobalResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion">resetObservabilityRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53GlobalresolverGlobalResolverTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetObservabilityRegion` <a name="resetObservabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion"></a>

```typescript
public resetObservabilityRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverGlobalResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses">iPv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses">iPv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput">observabilityRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion">observabilityRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iPv4Addresses`<sup>Required</sup> <a name="iPv4Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```typescript
public readonly iPv4Addresses: string[];
```

- *Type:* string[]

---

##### `iPv6Addresses`<sup>Required</sup> <a name="iPv6Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```typescript
public readonly iPv6Addresses: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags"></a>

```typescript
public readonly tags: Route53GlobalresolverGlobalResolverTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `observabilityRegionInput`<sup>Optional</sup> <a name="observabilityRegionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput"></a>

```typescript
public readonly observabilityRegionInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53GlobalresolverGlobalResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `observabilityRegion`<sup>Required</sup> <a name="observabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```typescript
public readonly observabilityRegion: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverGlobalResolverConfig <a name="Route53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.Initializer"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

const route53GlobalresolverGlobalResolverConfig: route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions">regions</a></code> | <code>string[]</code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken">clientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion">observabilityRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `observabilityRegion`<sup>Optional</sup> <a name="observabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion"></a>

```typescript
public readonly observabilityRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53GlobalresolverGlobalResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

### Route53GlobalresolverGlobalResolverTags <a name="Route53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.Initializer"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

const route53GlobalresolverGlobalResolverTags: route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverGlobalResolverTagsList <a name="Route53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

new route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get"></a>

```typescript
public get(index: number): Route53GlobalresolverGlobalResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverGlobalResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>[]

---


### Route53GlobalresolverGlobalResolverTagsOutputReference <a name="Route53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```typescript
import { route53GlobalresolverGlobalResolver } from '@cdktn/provider-awscc'

new route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53GlobalresolverGlobalResolverTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>

---



